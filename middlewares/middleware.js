const {checkSchema, validationResult} = require('express-validator')

const validateProduct = schema =>
  [
    checkSchema(schema),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
    }
  ]

module.exports = {validateProduct};
