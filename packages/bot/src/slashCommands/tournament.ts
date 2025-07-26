import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';
import { SlashCommand } from '../@types/command';
import { ExtendedClient } from '../client';
import axios from 'axios';

const command: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName('tournament')
    .setDescription('Tournament management commands')
    .addSubcommand(subcommand =>
      subcommand
        .setName('create')
        .setDescription('Create a new tournament')
        .addStringOption(option =>
          option
            .setName('name')
            .setDescription('Tournament name')
            .setRequired(true))
        .addStringOption(option =>
          option
            .setName('description')
            .setDescription('Tournament description')
            .setRequired(false))
        .addIntegerOption(option =>
          option
            .setName('max_participants')
            .setDescription('Maximum number of participants')
            .setRequired(false)))
    .addSubcommand(subcommand =>
      subcommand
        .setName('list')
        .setDescription('List all tournaments'))
    .addSubcommand(subcommand =>
      subcommand
        .setName('join')
        .setDescription('Join a tournament')
        .addStringOption(option =>
          option
            .setName('id')
            .setDescription('Tournament ID')
            .setRequired(true)))
    .addSubcommand(subcommand =>
      subcommand
        .setName('info')
        .setDescription('Get detailed tournament information')
        .addStringOption(option =>
          option
            .setName('id')
            .setDescription('Tournament ID')
            .setRequired(true))),

  async execute(client: ExtendedClient, interaction: ChatInputCommandInteraction) {
    const subcommand = interaction.options.getSubcommand();
    const API_BASE = process.env.API_BASE_URL || 'http://localhost:3001';

    try {
      switch (subcommand) {
        case 'create':
          const name = interaction.options.getString('name', true);
          const description = interaction.options.getString('description') || '';
          const maxParticipants = interaction.options.getInteger('max_participants') || undefined;

          const response = await axios.post(`${API_BASE}/api/tournaments`, {
            name,
            description,
            organizerId: interaction.user.id,
            guildId: interaction.guildId,
            maxParticipants
          });

          const embed = new EmbedBuilder()
            .setColor('Green')
            .setTitle('🏆 Tournament Created!')
            .setDescription(`**${name}** has been created successfully`)
            .addFields(
              { name: 'Tournament ID', value: response.data.id, inline: true },
              { name: 'Status', value: response.data.status, inline: true },
              { name: 'Organizer', value: `<@${interaction.user.id}>`, inline: true }
            )
            .setFooter({ text: `Use /tournament join ${response.data.id} to participate!` })
            .setTimestamp();

          if (maxParticipants) {
            embed.addFields({ name: 'Max Participants', value: maxParticipants.toString(), inline: true });
          }

          await interaction.reply({ embeds: [embed] });
          break;

        case 'join':
          const tournamentId = interaction.options.getString('id', true);
          
          const joinResponse = await axios.post(`${API_BASE}/api/tournaments/${tournamentId}/join`, {
            userId: interaction.user.id,
            username: interaction.user.username
          });

          const joinEmbed = new EmbedBuilder()
            .setColor('Yellow')
            .setTitle('✅ Tournament Joined!')
            .setDescription(`<@${interaction.user.id}> successfully joined the tournament!`)
            .addFields(
              { name: 'Tournament', value: joinResponse.data.tournament.name, inline: true },
              { name: 'Participants', value: joinResponse.data.tournament.participants.length.toString(), inline: true }
            )
            .setTimestamp();

          await interaction.reply({ embeds: [joinEmbed] });
          break;

        case 'info':
          const infoId = interaction.options.getString('id', true);
          const infoResponse = await axios.get(`${API_BASE}/api/tournaments/${infoId}`);
          const tournament = infoResponse.data;

          const infoEmbed = new EmbedBuilder()
            .setColor('Blue')
            .setTitle(`🏆 ${tournament.name}`)
            .setDescription(tournament.description || 'No description provided')
            .addFields(
              { name: 'Status', value: tournament.status, inline: true },
              { name: 'Participants', value: `${tournament.participants.length}${tournament.maxParticipants ? `/${tournament.maxParticipants}` : ''}`, inline: true },
              { name: 'Created', value: new Date(tournament.createdAt).toLocaleDateString(), inline: true }
            )
            .setTimestamp();

          if (tournament.participants.length > 0) {
            const participantList = tournament.participants
              .slice(0, 10) // Show max 10 participants
              .map((p: any) => `• ${p.username}`)
              .join('\n');
            
            infoEmbed.addFields({ name: 'Participants', value: participantList, inline: false });
            
            if (tournament.participants.length > 10) {
              infoEmbed.setFooter({ text: `And ${tournament.participants.length - 10} more participants...` });
            }
          }

          await interaction.reply({ embeds: [infoEmbed] });
          break;

        case 'list':
          const listResponse = await axios.get(`${API_BASE}/api/tournaments`);
          const tournaments = listResponse.data.tournaments;

          if (tournaments.length === 0) {
            await interaction.reply('📋 No tournaments available. Create one with `/tournament create`!');
            return;
          }

          const listEmbed = new EmbedBuilder()
            .setColor('Blue')
            .setTitle('📋 Active Tournaments')
            .setDescription(tournaments.slice(0, 10).map((t: any, index: number) => 
              `${index + 1}. **${t.name}** (ID: ${t.id})\n   └ ${t.status} • ${t.participants.length} participants`
            ).join('\n\n'))
            .setFooter({ text: 'Use /tournament info <id> for more details' })
            .setTimestamp();

          await interaction.reply({ embeds: [listEmbed] });
          break;

        default:
          await interaction.reply({ content: 'Unknown subcommand.', ephemeral: true });
      }
    } catch (error: any) {
      console.error('Tournament command error:', error);
      
      let errorMessage = '❌ Error executing tournament command.';
      if (error.response?.status === 400) {
        errorMessage = `❌ ${error.response.data.error}`;
      } else if (error.response?.status === 404) {
        errorMessage = '❌ Tournament not found.';
      }
      
      await interaction.reply({ content: errorMessage, ephemeral: true });
    }
  },
};

export default command;
