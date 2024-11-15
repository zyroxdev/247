const { Client } = require('discord.js-selfbot-v13');

// Create two clients for two accounts with PC-like settings
const account1 = new Client({
    ws: {
        properties: {
            $browser: 'Discord Chrome', // Emulates a desktop environment (Chrome on PC)
        },
    },
});
const account2 = new Client({
    ws: {
        properties: {
            $browser: 'Discord Chrome', // Emulates a desktop environment (Chrome on PC)
        },
    },
});

// Retrieve tokens from environment variables
const TOKEN_ACCOUNT1 = process.env.TOKEN_ACCOUNT1;
const TOKEN_ACCOUNT2 = process.env.TOKEN_ACCOUNT2;

// Function to log when the account is ready
function setupAccount(client, accountName) {
    client.on('ready', () => {
        console.log(`${accountName} (${client.user.tag}) is now online with PC badge!`);
    });
}

// Set up both accounts
setupAccount(account1, 'Account 1');
setupAccount(account2, 'Account 2');

// Login both accounts
account1.login(TOKEN_ACCOUNT1);
account2.login(TOKEN_ACCOUNT2);
