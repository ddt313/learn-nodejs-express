const db = require('../db')

module.exports.index = (req, res) => {
  console.log(req.cookies)
  res.render('users/index', {
    users: db.get('users').value()
  })
}

module.exports.search = (req, res) => {
  const q = req.query.q
  const matchedUsers = db.get('users').value().filter((user) => {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  })

  res.render('users/index', {
    users: matchedUsers,
    valueSearch: q
  })
}

module.exports.create = (req, res) => {
  res.render('users/create')
}

module.exports.viewUser = (req, res) => {
  const id = parseInt(req.params.id);

  const user = db.get('users').find({ id: id }).value()

  res.render('users/view', {
    user
  })
}

module.exports.postCreate = (req, res) => {
  req.body.id = Date.now()
  db.get('users').push(req.body).write()

  res.redirect('/users')
}