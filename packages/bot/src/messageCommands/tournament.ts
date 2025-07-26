import { Message, EmbedBuilder } from 'discord.js';
import { MessageCommand } from '../@types/command';
import { ExtendedClient } from '../client';
import axios from 'axios';

const command: MessageCommand = {
  name: 'tournament',
  description: 'Tournament management via message commands',
  category: 'Tournament',
  aliases: ['t', 'tourney'],
  cooldown: 5,
  syntax: 'cf!tournament <create|list|join> [args...]',

  async execute(client: ExtendedClient, message: Message, args: string[]) {
    const subcommand = args[0]?.toLowerCase();
    const API_BASE = process.env.API_BASE_URL || 'http://localhost:3001';

    if (!subcommand) {
      const helpEmbed = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('🏆 Tournament Commands')
        .setDescription('Available tournament commands:')
        .addFields(
          { name: 'Create', value: '`cf!tournament create <name> [description]`', inline: false },
          { name: 'List', value: '`cf!tournament list`', inline: false },
          { name: 'Join', value: '`cf!tournament join <id>`', inline: false }
        )
        .setFooter({ text: 'CardForge Tournament Platform' });

      await message.reply({ embeds: [helpEmbed] });
      return;
    }

    try {
      switch (subcommand) {
        case 'create':
          const name = args[1];
          if (!name) {
            await message.reply('❌ Please provide a tournament name!');
            return;
          }

          const description = args.slice(2).join(' ') || '';

          const response = await axios.post(`${API_BASE}/api/tournaments`, {
            name,
            description,
            organizerId: message.author.id
          });

          const createEmbed = new EmbedBuilder()
            .setColor('Green')
            .setTitle('🏆 Tournament Created!')
            .setDescription(`**${name}** has been created successfully`)
            .addFields(
              { name: 'Tournament ID', value: response.data.id, inline: true },
              { name: 'Status', value: response.data.status, inline: true },
              { name: 'Organizer', value: message.author.username, inline: true }
            )
            .setTimestamp();

          await message.reply({ embeds: [createEmbed] });
          break;

        case 'list':
          const listResponse = await axios.get(`${API_BASE}/api/tournaments`);
          const tournaments = listResponse.data.tournaments;

          if (tournaments.length === 0) {
            await message.reply('📋 No tournaments available. Create one with `cf!tournament create <name>`');
            return;
          }

          const listEmbed = new EmbedBuilder()
            .setColor('Blue')
            .setTitle('📋 Active Tournaments')
            .setDescription(tournaments.map((t: any, index: number) => 
              `${index + 1}. **${t.name}** - ${t.status} (${t.participants.length} participants)`
            ).join('\n'))
            .setFooter({ text: `Total: ${tournaments.length} tournaments` })
            .setTimestamp();

          await message.reply({ embeds: [listEmbed] });
          break;

        case 'join':
          const tournamentId = args[1];
          if (!tournamentId) {
            await message.reply('❌ Please provide a tournament ID!');
            return;
          }

          // TODO: Implement actual join logic with API
          const joinEmbed = new EmbedBuilder()
            .setColor('Yellow')
            .setTitle('✅ Tournament Joined!')
            .setDescription(`${message.author.username} successfully joined tournament ${tournamentId}`)
            .setTimestamp();

          await message.reply({ embeds: [joinEmbed] });
          break;

        default:
          await message.reply(`❌ Unknown subcommand: \`${subcommand}\`. Use \`cf!tournament\` for help.`);
      }
    } catch (error) {
      console.error('Tournament command error:', error);
      await message.reply('❌ Error executing tournament command. Please try again later.');
    }
  },
};

export default command;
