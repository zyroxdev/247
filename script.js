require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const http = require('http');

// Create two clients for two accounts
const account1 = new Client({ ws: { properties: { $browser: 'Discord Chrome' } } });
const account2 = new Client({ ws: { properties: { $browser: 'Discord Chrome' } } });

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

// Set up a basic HTTP server to bind to the port
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running!');
});

// Listen on the port Render provides (it will be automatically passed as process.env.PORT)
const port = process.env.PORT || 8080;  // Use the provided port or fallback to 8080
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

