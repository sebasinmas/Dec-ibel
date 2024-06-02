import dotenv from 'dotenv';

dotenv.config();
const {DISCORD_TOKEN, APP_ID, PUBLIC_KEY} = process.env;

if (!DISCORD_TOKEN || !APP_ID || !PUBLIC_KEY) {
    throw new Error('Missing environment variables'); 
}

export const config = {
    DISCORD_TOKEN,
    APP_ID,
    PUBLIC_KEY
};