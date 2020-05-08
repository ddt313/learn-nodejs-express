const db = require('../db')

module.exports.postUsers = (req, res, next) => {
  var errors = {};
  if ( !req.body.name ) {
    errors.name = "Name is required!"
  }
  if ( !req.body.email ) {
    errors.email = "Email is required!"
  }

  if (errors.name || errors.email) {
    res.render('users/create', {
      errors: errors
    })
    return;
  }

  next()
}

module.exports.postEditProfile = (req, res, next) => {
  let errors = {}

  if ( !req.body.email ) {
    errors.email = "Email is required!"
  }
  if ( !req.body.name ) {
    errors.name = "Name is required!"
  }

  if (errors.name || errors.email) {
    res.render('./users/editProfile', {
      user: db.get('users')
              .find({ id: parseInt(req.params.id) }).value(),
      errors
    })
    return;
  }

  next()
}