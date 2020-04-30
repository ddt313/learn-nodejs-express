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