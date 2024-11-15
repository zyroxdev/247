require('dotenv').config(); // Load environment variables
const { Client } = require('discord.js-selfbot-v13');

// Create two clients for two accounts
const account1 = new Client();
const account2 = new Client();

// Tokens from .env
const TOKEN_ACCOUNT1 = process.env.TOKEN_ACCOUNT1;
const TOKEN_ACCOUNT2 = process.env.TOKEN_ACCOUNT2;

// Function to log when the account is ready
function setupAccount(client, accountName) {
    client.on('ready', () => {
        console.log(`${accountName} (${client.user.tag}) is now online!`);
    });
}

// Set up both accounts
setupAccount(account1, 'Account 1');
setupAccount(account2, 'Account 2');

// Login both accounts
account1.login(TOKEN_ACCOUNT1);
account2.login(TOKEN_ACCOUNT2);
