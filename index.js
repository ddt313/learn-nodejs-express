const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRoute = require('./routes/users.route')
const loginRoute = require('./routes/login.route')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))
app.use(cookieParser())

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/users', userRoute)
app.use('/login', loginRoute)

app.get('/cookie', (req, res) => {
  res.cookie('cookie_id', 12345)
  res.send('Cookie')
})

app.listen(port, () => {
  console.log("Server listen port " + port)
})
