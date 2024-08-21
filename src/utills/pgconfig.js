const { Pool } = require('pg');
const CONFIG = require('./config'); // Assuming this still holds other non-DB config values
const { contactsTable } = require('./utills');

let poolConfig = {};

// Check if the DATABASE_URL is available
if (process.env.DATABASE_URL) {
  poolConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  // Fallback to local configuration for development
  poolConfig = {
    host: CONFIG.host, //host name
    user: CONFIG.user, //user name in db
    port: CONFIG.port, // default one
    password: CONFIG.password, // password for accessing DB
    database: CONFIG.database, // DB name
  };
}

const Client = new Pool(poolConfig);

// Initialize DB when starting the application
const dbInit = async () => {
  try {
    await Client.query(contactsTable);
  } catch (error) {
    console.log(error);
    throw error.message;
  }
};

module.exports = {
  Client,
  getClientFromPool: () => {
    return Client.connect();
  },
  dbInit,
};
