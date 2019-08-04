var TeachMe = require('../models/TeachMe')
var express = require('express')
var router = express.Router()
var auth = require('./authentication.js')

router.post('/save', function (req, res) {
    var queriesAsked = new TeachMe();
    queriesAsked.question= req.body.question;
    queriesAsked.answer= req.body.answer;
    queriesAsked.explanation= req.body.explanation;
    queriesAsked.save(function (err, queriesAsked) {
        if (err)
            res.send(err);
        else {
          //  console.log(department);
            res.json(queriesAsked);
        }
    });
});

router.get('/getAllSuggestions',async (req, res) => {
    try {
    var queriesAsked = await TeachMe.find();
      res.send(queriesAsked)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  })

module.exports = router