const express = require('express');
const {query, validationResult} = require('express-validator')
const {validateProduct} = require('../middlewares/middleware')
const {createProductsSchema} = require('../schemas/products')
const router = express.Router();

router.route('')
  .get((req, res)=>{})
  .post(validateProduct(createProductsSchema),(req, res)=>{})

router.route('/:id')
  .get(query('name').isString(), (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  })
  .put((req, res)=>{})
  .delete((req, res)=>{})

module.exports = router;
