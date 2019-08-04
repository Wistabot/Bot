var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors');
var authentication = require('./controllers/authentication.js')
var admin = require('./controllers/admin.js')
var course = require('./controllers/course.js')
var pattern = require('./controllers/pattern.js')
var word = require('./controllers/word.js')
var query = require('./controllers/queries.js')
var teachme = require('./controllers/teachme.js')
var app = express()

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false)

  // Pass to next layer of middleware
  next()
})

app.use(cors());

// (node:7472) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
mongoose.Promise = Promise

app.use(bodyParser.json())

app.use('/authentication', authentication.router)
app.use('/admin', admin)
app.use('/courses', course)
app.use('/words', word)
app.use('/patterns', pattern)
app.use('/queries', query)
app.use('/teachMe', teachme)


mongoose.connect('mongodb://localhost:27017/CRM', { useMongoClient: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to the database.')
})

app.post('/test', (req, res) => {
  console.log(req.body)
})

let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Server running at http://localhost:' + port)
})
