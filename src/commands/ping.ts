import { CommandInteraction, SlashCommandBuilder } from "discord.js";


export const data:SlashCommandBuilder = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

export async function execute(interaction: CommandInteraction) {
  await interaction.reply("Pong!");
}