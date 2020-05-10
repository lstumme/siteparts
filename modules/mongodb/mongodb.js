const mongoose = require('mongoose');
const config = require('../config/config').mongodb;

let connection = 'mongodb://';
connection += (config.username && config.password) ? config.username + ':' + config.password + '@' : '';
connection += config.address;
connection += '/' + config.database
console.log(connection);
mongoose.connect(connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(result => {
    console.log('MongoDB connection OK')
}).catch(err => {
    console.error('MongoDB connection KO');
    console.log(err);
});

module.exports = mongoose;