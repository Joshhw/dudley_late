'use strict';

let config;

try {
    config = require('../local.env');
} catch(e) {
    config = {};
}


// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: config.mongoDev || 'mongo'
  },

  // Seed database on startup
  seedDB: false

};
