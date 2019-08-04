var User = require('../models/User.js')
var auth = require('./authentication.js')
var jwt = require('jwt-simple')
var express = require('express')
var router = express.Router()

router.get('/users', auth.isInRole('admin'), async (req, res) => {
  try {
    var users = await User.find({}, '-password -__v')
    res.send(users)
  } catch (error) {
    console.error(error)
    res.status(500)
  }
})

router.get('/edit/:userId', auth.isInRole('admin'), (req, res, next) => {
  User.findById(req.params.userId, { 'password': 0, '__v': 0 }, (err, user) => {
    if (err) {
      res.status(500).send(err)
    } else if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send('No user found')
    }
  })
})

router.patch('/edit/:userId', auth.isInRole('admin'), (req, res, next) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      res.status(500).send(err)
    } else {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      user.role = req.body.role || user.role

      user.save((err, user) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).send({
            name: user.name,
            email: user.email,
            role: user.role
          })
        }
      })
    }
  })
})

router.delete('/edit/:userId', auth.isInRole('admin'), (req, res, next) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      res.status(500).send(err)
    }
    if (user) {
      user.remove()
      res.status(200).send({ message: 'User removed' })
    }
  })
})

router.get('/users/getUserDetails',(auth.checkAuthenticated), (req, res) => {
  var token = req.header('Authorization').split(' ')[1]
  var payload = jwt.decode(token, '123')

  if (!payload) {
    return res.status(401).send({ message: 'Unauthorized.' })
  } else {
    User.findById(payload.sub, { 'password': 0, '__v': 0 }, (err, user) => {
      if (err) {
        res.status(500).send(err)
      } else if (user) {
       res.status(200).send(user)
      } else {
        res.status(404).send('No user found')
      }
    })
  }
})


module.exports = router
