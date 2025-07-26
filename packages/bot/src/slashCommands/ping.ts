import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { SlashCommand } from '../@types/command';
import { ExtendedClient } from '../client';

const command: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),

  async execute(client: ExtendedClient, interaction: ChatInputCommandInteraction) {
    const ping = client.ws.ping;
    await interaction.reply(`🏓 Pong! Latency: ${ping}ms`);
  },
};

export default command;
