var Course = require('../models/Course')
var express = require('express')
var auth = require('./authentication.js')
var router = express.Router()

//get all courses
router.get('/courses', async (req, res) => {
    try {
      var courses = await Course.find();
      res.send(courses)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  })

  //get courses by department id
  router.get('/getCoursesByDeptID/:id',(auth.checkAuthenticated), async (req, res) => {
    try {
    var courses = await Course.find({"departmentid":req.params.id,"maximumlimit": { $gte: 0} });
      res.send(courses)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  })

  router.get('/edit/:userId' , (req, res, next) => {
    Course.findById(req.params.userId, (err, user) => {
      if (err) {
        res.status(500).send(err)
      } else if (user) {
        res.status(200).send(user)
      } else {
        res.status(404).send('No user found')
      }
    })
  })

  router.patch('/edit/:userId', (req, res, next) => {
    Course.findById(req.params.userId, (err, user) => {
      if (err) {
        res.status(500).send(err)
      } else {
        user.url = req.body.url || user.url
  
        user.save((err, user) => {
          if (err) {
            res.status(500).send(err)
          } else {
            res.status(200).send(
             { message: 'Link Updated' }
             )
          }
        })
      }
    })
  })

  module.exports = router