var mongoose = require('mongoose')


var wordSchema = new mongoose.Schema({
    value: String,
    tagger: String,
});



module.exports = mongoose.model('Word', wordSchema)