import { Message, EmbedBuilder } from 'discord.js';
import { MessageCommand } from '../@types/command';
import { ExtendedClient } from '../client';

const command: MessageCommand = {
  name: 'ping',
  description: 'Check bot latency',
  category: 'Utility',
  aliases: ['pong', 'latency'],
  cooldown: 3,

  async execute(client: ExtendedClient, message: Message, args: string[]) {
    const sent = await message.reply('🏓 Pinging...');
    
    const ping = sent.createdTimestamp - message.createdTimestamp;
    const wsPing = client.ws.ping;

    const embed = new EmbedBuilder()
      .setColor('Green')
      .setTitle('🏓 Pong!')
      .addFields(
        { name: 'Bot Latency', value: `${ping}ms`, inline: true },
        { name: 'API Latency', value: `${wsPing}ms`, inline: true }
      )
      .setTimestamp();

    await sent.edit({ content: '', embeds: [embed] });
  },
};

export default command;
