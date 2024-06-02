import { REST, Routes, SlashCommandBuilder } from "discord.js";
import { config } from "./config";
import { commands } from "./commands/_index";

const commandsData: SlashCommandBuilder[] = Object.values(commands).map((command) => command.data);

const rest: REST = new REST({ version: '10' }).setToken(config.DISCORD_TOKEN);

type DeplyCommandsProps = {
    guildId: string;
}

export async function deployCommands({ guildId }: DeplyCommandsProps) {
    try {
        console.log('Started refreshing applications (/) commands');
        await rest.put(
            Routes.applicationGuildCommands(config.APP_ID, guildId),
            {
                body: commandsData,
            }
        );
        console.log('Successfully reloaded application (/) commands');
    } catch (error) {
        console.error(error);
    }
}


