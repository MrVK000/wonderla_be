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
    host: CONFIG.host, // host name
    user: CONFIG.user, // user name in db
    port: CONFIG.port, // default one
    password: CONFIG.password, // password for accessing DB
    database: CONFIG.database, // DB name
  };
}

const Client = new Pool(poolConfig);

// Check if the database connection is established
const checkDBConnection = async () => {
  try {
    await Client.connect();
    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error('Database connection error', error.stack);
  }
};

// Initialize DB when starting the application
const dbInit = async () => {
  try {
    await Client.query(contactsTable);
  } catch (error) {
    console.log(error);
    throw error.message;
  }
};

// Run the database connection check
checkDBConnection();

module.exports = {
  Client,
  getClientFromPool: () => {
    return Client.connect();
  },
  dbInit,
};
