const priceFormater = ( price = '' ) => {
  if ( price.length <= 0 || price.length < 4 ) {
    return price;
  }

  const formatedPrice = new Intl.NumberFormat('es-ES').format( price );

  return formatedPrice;
}

module.exports = priceFormater;
