var QueriesAsked = require('../models/QueriesAsked')
var UnansweredQueries = require('../models/UnansweredQueries')
var express = require('express')
var auth = require('./authentication.js')
var router = express.Router()

 //get courses by department id
 router.get('/getAllQuestion',(auth.checkAuthenticated),async (req, res) => {
    try {
    var queriesAsked = await QueriesAsked.distinct( "questions" );
      res.send(queriesAsked)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  })

  router.get('/getUnansweredQuestion',(auth.checkAuthenticated),async (req, res) => {
    try {
    var queriesAsked = await UnansweredQueries.distinct( "questions" );
      res.send(queriesAsked)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  })

 router.post('/addQuestion', function (req, res) {
    var queriesAsked = new QueriesAsked();
    queriesAsked.questions= req.body.questions;
    console.log(queriesAsked.questions)
    queriesAsked.save(function (err, queriesAsked) {
        if (err)
            res.send(err);
        else {
          //  console.log(department);
            res.json(queriesAsked);
        }
    });
});

router.post('/addUnAnsweredQuestion', function (req, res) {
    var unansweredQueries = new UnansweredQueries();
    unansweredQueries.questions= req.body.questions;
    unansweredQueries.save(function (err, unansweredQueries) {
        if (err)
            res.send(err);
        else {
          //  console.log(department);
            res.json(unansweredQueries);
        }
    });
});

module.exports = router