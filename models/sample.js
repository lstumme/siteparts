const mongoose = require('../modules/mogodb/mogodb');

const Schema = mongoose.Schema;

const sampleSchema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, required: false }
});

module.exports = mongoose.model('Sample', sampleSchema);