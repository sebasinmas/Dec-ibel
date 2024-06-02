import { CommandInteraction, SlashCommandBuilder } from "discord.js";


export const data:SlashCommandBuilder = new SlashCommandBuilder()
  .setName("join")
  .setDescription("Joins to your voice channel! WIP");

export async function execute(interaction: CommandInteraction) {
  await interaction.reply("Joining channel!");
}