import { Collection, Message, PermissionsBitField } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url'; // Add this import
import { MessageCommand } from '../@types/command';
import { ExtendedClient } from '../client';

export class MessageCommandHandler {
  private client: ExtendedClient;

  constructor(client: ExtendedClient) {
    this.client = client;
    this.client.commands = new Collection();
    this.client.commandCategories = new Map();
    this.client.cooldowns = new Collection();
  }

  async loadMessageCommands(): Promise<void> {
    const commandsPath = path.join(__dirname, '..', 'messageCommands');
    
    if (!fs.existsSync(commandsPath)) {
      fs.mkdirSync(commandsPath, { recursive: true });
    }
    
    await this.walkDirectory(commandsPath);
    this.organizeCategories();
  }

  private async walkDirectory(dir: string): Promise<void> {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        await this.walkDirectory(filePath);
      } else if (file.endsWith('.ts') || file.endsWith('.js')) {
        await this.loadCommandFile(filePath);
      }
    }
  }

  private async loadCommandFile(filePath: string): Promise<void> {
    try {
      // Fix: Convert Windows path to proper file:// URL
      const fileUrl = pathToFileURL(filePath).href;
      const commandModule = await import(fileUrl);
      const command: MessageCommand = commandModule.default;

      if (!command?.name) return;

      if (this.client.commands.has(command.name)) {
        console.warn(`Duplicate command name: ${command.name}`);
        return;
      }

      this.client.commands.set(command.name, {
        ...command,
        cooldown: command.cooldown ?? this.client.config.defaultCooldown,
        category: command.category ?? 'General',
      });

      console.log(`✅ Loaded message command: ${command.name}`);
    } catch (error) {
      console.error(`❌ Error loading command ${filePath}:`, error);
    }
  }

  private organizeCategories(): void {
    this.client.commandCategories.clear();
    this.client.commands.forEach((command) => {
      const category = command.category || 'General';
      const commands = this.client.commandCategories.get(category) || [];
      commands.push(command);
      this.client.commandCategories.set(category, commands);
    });
  }

  async handleMessage(message: Message): Promise<void> {
    if (!message.content || message.author.bot || !message.guild) return;

    const prefix = this.client.config.defaultPrefix;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift()?.toLowerCase();
    if (!commandName) return;

    const command = this.client.commands.get(commandName) ||
                   this.client.commands.find(c => c.aliases?.includes(commandName));

    if (!command) return;

    // Permission checks
    if (command.permissions && message.member) {
      const missingPermissions = message.member.permissions.missing(command.permissions);
      if (missingPermissions.length > 0) {
        await message.reply(`❌ Missing permissions: ${missingPermissions.join(', ')}`);
        return;
      }
    }

    // Role checks
    if (command.requiredRoles && message.member) {
      const hasRole = command.requiredRoles.some(roleId =>
        message.member!.roles.cache.has(roleId)
      );

      if (!hasRole) {
        await message.reply('❌ You don\'t have the required roles for this command.');
        return;
      }
    }

    // Cooldown handling
    const cooldownKey = `${message.author.id}-${command.name}`;
    const now = Date.now();
    const cooldownTime = (command.cooldown ?? this.client.config.defaultCooldown) * 1000;

    if (!this.client.cooldowns.has(cooldownKey)) {
      this.client.cooldowns.set(cooldownKey, new Collection());
    }

    const timestamps = this.client.cooldowns.get(cooldownKey)!;
    if (timestamps.has(message.author.id)) {
      const expiration = timestamps.get(message.author.id)! + cooldownTime;
      if (now < expiration) {
        const remaining = ((expiration - now) / 1000).toFixed(1);
        await message.reply(`⏱️ Please wait ${remaining}s before using \`${command.name}\` again.`);
        return;
      }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownTime);

    // Execute command
    try {
      await command.execute(this.client, message, args);
    } catch (error) {
      console.error(`Command Error [${command.name}]:`, error);
      await message.reply('❌ An error occurred while executing this command.');
    }
  }
}
