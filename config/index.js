const config = require('./config');

const env = process.env.NODE_ENV;

module.exports = config[env];
