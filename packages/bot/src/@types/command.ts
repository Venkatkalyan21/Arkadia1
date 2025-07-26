import { 
  SlashCommandBuilder, 
  ChatInputCommandInteraction, 
  SlashCommandSubcommandsOnlyBuilder,
  Message,
  PermissionsBitField 
} from 'discord.js';
import { ExtendedClient } from '../client';

export interface SlashCommand {
  data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
  execute: (client: ExtendedClient, interaction: ChatInputCommandInteraction) => Promise<void>;
}

export interface MessageCommand {
  name: string;
  description: string;
  category?: string;
  aliases?: string[];
  cooldown?: number;
  permissions?: (keyof typeof PermissionsBitField.Flags)[];
  requiredRoles?: string[];
  syntax?: string;
  execute: (client: ExtendedClient, message: Message, args: string[]) => Promise<void>;
}
