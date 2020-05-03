const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('auth/login')
})

router.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    console.log(email, password)

    const user = db.get('users').find({ email }).value()
    var error = false

    console.log(user)

    if (user) {
        if (password == user.password) {
            res.redirect('/users/' + user.id)
            return;
        }else {
            error = true
        }
    }else {
        error = false
    }

    res.send('email or password incorrect')
})

module.exports = router