const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Invalid email.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `
              Provide lower case, upper case and numeric caracters only.
              <br>
              Minimum of 8, up to 32 characters are allowed.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Default error.'
          })
          break
      }
    } else {
      next()
    }
  }
}
