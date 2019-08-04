var mongoose = require('mongoose')


var unansweredQueriesSchema = new mongoose.Schema({
    questions: String
});



module.exports = mongoose.model('UnansweredQueries', unansweredQueriesSchema)