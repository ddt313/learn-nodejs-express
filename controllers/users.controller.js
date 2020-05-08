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
    user,
    id
  })
}

module.exports.editProfile = (req, res) => {
  const id = parseInt(req.params.id)
  const user = db.get('users').find({ id }).value()

  res.render('./users/editProfile', {
    user
  })
}

module.exports.postCreate = (req, res) => {
  req.body.id = Date.now()
  db.get('users').push(req.body).write()
  
  res.redirect('/users')
}

module.exports.postEditProfile = (req, res) => {
  const id = parseInt(req.params.id);
  const {email, name, age} = req.body;

  db.get('users')
    .find({ id })
    .assign({ email, name, age })
    .write()

  res.redirect('/users/' + id);
}