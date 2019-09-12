const config = require('./config');

const env = process.env.NODE_ENV;
process.env.PORT = config[env].server.port;

module.exports = config[env];
