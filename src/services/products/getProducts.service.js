// Models
const { Product } = require( '../../models' );

const getProductsService = async ( query = {}, from = 0, limit = 0 ) => {
  try {
    const [ total, products ] = await Promise.all([
      Product.countDocuments( query ),
      Product.find( query )
        .skip( Number( from ) )
        .limit( Number( limit ) )
        .populate( 'brand', 'name' )
        .populate( 'category', 'name' )
    ]);

    return {
      total,
      products
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCTS]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getProductsService;
