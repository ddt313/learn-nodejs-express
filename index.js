const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/users.route')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/users', userRoute)

app.listen(port, () => {
  console.log("Server listen port " + port)
})
