var mongoose = require('mongoose')


var patternSchema = new mongoose.Schema({
    value: String,
    tagger: String,
});



module.exports = mongoose.model('Pattern', patternSchema)