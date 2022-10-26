const stockValidator = ( stock = 0 ) => {
  if ( stock <= 0 ) return 0;

  return stock;
}

module.exports = stockValidator;
