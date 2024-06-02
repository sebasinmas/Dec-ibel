import { Client } from "discord.js";
import { deployCommands } from "../deploy_commands";
import { commands } from "../commands/_index";
import { config } from "../config";

export default function clientStart() {
    const client: Client = new Client({
        intents: ['Guilds', 'GuildMessages', 'DirectMessages'],
    });
    
    client.once('ready', () => {
        console.log(`Client is ready!`);
        client.guilds.cache.forEach(async (guild) => {
            await deployCommands({ guildId: guild.id });
        });

    })
    
    client.on("guildCreate", async (guild) => {
        console.log(`${guild}`);
        await deployCommands({ guildId: guild.id });
    });
    
    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isCommand()) {
            return;
        }
        const { commandName } = interaction;
        if (commands[commandName as keyof typeof commands]) {
            commands[commandName as keyof typeof commands].execute(interaction);
        }
    });
    
    client.login(config.DISCORD_TOKEN);
}



