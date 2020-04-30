const express = require('express')


const db = require('../db')
const usersController = require('../controllers/users.controller')

const router = express.Router()

router.get('/', usersController.index)

router.get('/search', usersController.search)

router.get('/create', usersController.create)

router.get('/:id', usersController.viewUser)

router.post('/create', usersController.postCreate)

module.exports = router