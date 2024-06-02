import { CommandInteraction, SlashCommandBuilder } from "discord.js";


export const data:SlashCommandBuilder = new SlashCommandBuilder()
  .setName("disconnect")
  .setDescription("Disconnects from your voice channel! WIP");

export async function execute(interaction: CommandInteraction) {
  await interaction.reply("Leaving voice channel!");
}