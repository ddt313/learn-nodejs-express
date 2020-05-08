const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('auth/login')
})

router.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    const user = db.get('users').find({ email }).value()
    let error = false

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