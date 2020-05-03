const express = require('express')

const usersController = require('../controllers/users.controller')
const validate = require('../validate/users.create.validate')

const router = express.Router()

router.get('/', usersController.index)

router.get('/search', usersController.search)

router.get('/create', usersController.create)

router.get('/:id', usersController.viewUser)

router.post('/create', validate.postUsers, usersController.postCreate)

module.exports = router