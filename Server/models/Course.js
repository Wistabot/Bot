var mongoose = require('mongoose')


var courseSchema = new mongoose.Schema({
  name: {type: String},
  semester:{  type: String},
  subject:{type: String},
  unit:{type: String},
  url:{type: String},
 })



module.exports = mongoose.model('Course', courseSchema)