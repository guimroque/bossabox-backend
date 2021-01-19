const mongoose = require('mongoose')
const secret = require('../config/secret.json')
module.exports = mongoose.connect(secret.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });