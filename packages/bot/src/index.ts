import dotenv from 'dotenv';
import { ExtendedClient, BotConfig } from './client';
import { SlashCommandHandler } from './handlers/SlashCommandHandler';
import { MessageCommandHandler } from './handlers/MessageCommandHandler';

dotenv.config();

const CONFIG: BotConfig = {
  defaultPrefix: 'cf!',
  defaultCooldown: 3,
  ownerId: process.env.OWNER_ID || '',
  colorTheme: '#5865F2'
};

const client = new ExtendedClient(CONFIG);
const slashHandler = new SlashCommandHandler(client);
const messageHandler = new MessageCommandHandler(client);

client.once('ready', async () => {
  console.log(`🤖 ${client.user?.tag} is ready!`);
  
  // Load both slash and message commands
  await slashHandler.loadSlashCommands();
  await messageHandler.loadMessageCommands();
  
  console.log(`🏆 CardForge Tournament Platform initialized!`);
  console.log(`📝 Message commands prefix: ${CONFIG.defaultPrefix}`);
  console.log(`⚡ Slash commands: /ping, /tournament`);
});

// Handle slash commands
client.on('interactionCreate', async (interaction) => {
  await slashHandler.handleInteraction(interaction);
});

// Handle message commands  
client.on('messageCreate', async (message) => {
  await messageHandler.handleMessage(message);
});

client.login(process.env.DISCORD_TOKEN);

export { client };
