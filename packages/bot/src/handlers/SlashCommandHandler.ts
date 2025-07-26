import { Collection, REST, Routes, Interaction, ChatInputCommandInteraction } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url'; // Add this import
import { SlashCommand } from '../@types/command';
import { ExtendedClient } from '../client';

export class SlashCommandHandler {
  private client: ExtendedClient;
  private commandData: any[] = [];

  constructor(client: ExtendedClient) {
    this.client = client;
    this.client.interactions = new Collection();
  }

  async loadSlashCommands(): Promise<void> {
    const commandsPath = path.join(__dirname, '..', 'slashCommands');
    
    if (!fs.existsSync(commandsPath)) {
      fs.mkdirSync(commandsPath, { recursive: true });
    }
    
    await this.walkDirectory(commandsPath);
    await this.registerToDiscord();
  }

  private async walkDirectory(dir: string): Promise<void> {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        await this.walkDirectory(fullPath);
      } else if (file.endsWith('.ts') || file.endsWith('.js')) {
        await this.loadCommand(fullPath);
      }
    }
  }

  private async loadCommand(filePath: string): Promise<void> {
    try {
      // Fix: Convert Windows path to proper file:// URL
      const fileUrl = pathToFileURL(filePath).href;
      const cmdModule = await import(fileUrl);
      const command: SlashCommand = cmdModule.default;

      if (!command?.data?.name || typeof command.execute !== 'function') return;

      this.client.interactions.set(command.data.name, command);
      this.commandData.push(command.data.toJSON());

      console.log(`✅ Loaded slash command: ${command.data.name}`);
    } catch (err) {
      console.error(`❌ Error loading slash command: ${filePath}`, err);
    }
  }

  private async registerToDiscord(): Promise<void> {
    if (this.commandData.length === 0) {
      console.log('No slash commands to register');
      return;
    }

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

    try {
      const appId = this.client.user?.id || process.env.DISCORD_CLIENT_ID;
      if (!appId) throw new Error('Client application ID not found');

      await rest.put(Routes.applicationCommands(appId), {
        body: this.commandData,
      });

      console.log(`✅ Registered ${this.commandData.length} slash commands`);
    } catch (err) {
      console.error('❌ Failed to register slash commands', err);
    }
  }

  async handleInteraction(interaction: Interaction): Promise<void> {
    if (!interaction.isChatInputCommand() || this.client.safemode) return;

    const command = this.client.interactions.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(this.client, interaction);
    } catch (error) {
      console.error(`❌ Interaction Error [${command.data.name}]:`, error);

      const errorMessage = 'Something went wrong while executing this command.';
      
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: errorMessage, ephemeral: true });
      } else {
        await interaction.reply({ content: errorMessage, ephemeral: true });
      }
    }
  }
}
