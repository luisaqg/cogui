const createProductsSchema = {
  name: {
    in: ['body'],
    isString: {errorMessage: "Should be a String"},
    isLength: {
      options: {min: 5, max: 50},
      errorMessage: "Must be 35 to 30 characters"
    }
  },
  company: {
    in:
      ['body'],
    isString: {errorMessage: "Should be a String"},
    isLength: {
      options: {min: 5, max: 50},
      errorMessage: "Must be 5 to 30 characters"
    }
  },
  price: {
    in:
      ['body'],
    isCurrency: {errorMessage: "Should be a Number"},
    isLength: {
      options: {min: 3, max: 7},
      errorMessage: "Must be 3 to 7 characters"
    }
  },
  salePrice: {
    in:
      ['body'],
    isCurrency: {errorMessage: "Should be a Number"},
    isLength: {
      options: {min: 3, max: 7},
      errorMessage: "Must be 3 to 7 characters"
    }
  },
  quantity: {
    in:
      ['body'],
    isAlphanumeric: {errorMessage: "Should be a Number"},
    isLength: {
      options: {min: 1, max: 2},
      errorMessage: "Must be 1 to 2 characters"
    }
  },
  weight: {
    in:
      ['body'],
    isNumeric: {errorMessage: "Should be a Number"},
    isLength: {
      options: {min: 1, max: 10},
      errorMessage: "Must be 1 to 10 characters"
    }
  },
}

module.exports = {createProductsSchema};
