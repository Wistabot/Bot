var mongoose = require('mongoose')


var teachSchema = new mongoose.Schema({
    question: {type: String},
    answer:{  type: String},
    explanation:{type: String},
 })



module.exports = mongoose.model('TeachMe', teachSchema)