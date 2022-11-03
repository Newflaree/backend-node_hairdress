// Helpers
const { stockValidator, priceFormater } = require( '../../helpers/db' );
// Models
const { Product } = require( '../../models' );

const updateProductByIdService = async ( uid = '', id = '', productData = {} ) => {
  const formatedData = {
    ...productData,
    stock: stockValidator( productData.stock ),
    price: priceFormater( productData.price ),
    user: uid.toString()
  };

  try {
    const productUpdated = await Product.findByIdAndUpdate( id, formatedData, { new: true } )
    .populate( 'user', 'name' )
    .populate( 'category', 'name' )
    .populate( 'brand', 'name' )

    return {
      productUpdated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-PRODUCT-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = updateProductByIdService;
