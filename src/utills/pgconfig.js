const { Pool } = require('pg');
const CONFIG = require('./config');
const { contactsTable } = require('./utills')


const Client = new Pool({
  host: CONFIG.host, //host name
  user: CONFIG.user, //user name in db
  port: CONFIG.port, // default one
  password: CONFIG.password, // password for accessing DB
  database: CONFIG.database // DB name
})

//Initialize db when start the application
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
  dbInit
} 