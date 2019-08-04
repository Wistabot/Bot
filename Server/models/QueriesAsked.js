var mongoose = require('mongoose')


var queriesAskedSchema = new mongoose.Schema({
    questions: String
});



module.exports = mongoose.model('QueriesAsked', queriesAskedSchema)