import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { SlashCommand, MessageCommand } from './@types/command';

export interface BotConfig {
  defaultPrefix: string;
  defaultCooldown: number;
  ownerId: string;
  colorTheme: string;
}

export class ExtendedClient extends Client {
  public config: BotConfig;
  public commands: Collection<string, MessageCommand>;  // Message commands
  public commandCategories: Map<string, MessageCommand[]>;
  public interactions: Collection<string, SlashCommand>; // Slash commands
  public safemode: boolean;
  public cooldowns: Collection<string, Collection<string, number>>;

  constructor(config: BotConfig) {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,  // Required for message commands
        GatewayIntentBits.GuildMembers,
      ],
    });

    this.config = config;
    this.commands = new Collection();
    this.commandCategories = new Map();
    this.interactions = new Collection();
    this.cooldowns = new Collection();
    this.safemode = false;
  }

  async reloadCommand(commandName: string): Promise<void> {
    console.log(`Reloading command: ${commandName}`);
  }
}
