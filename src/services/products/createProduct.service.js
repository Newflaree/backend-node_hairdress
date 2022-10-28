// Helpers
const { priceFormater, stockValidator } = require( '../../helpers/db/products' );
// Models
const { Product } = require( '../../models' );

const createProductService = async ( uid = '', productData = {} ) => {
  const formatedData = {
    ...productData,
    stock: stockValidator( productData.stock ),
    price: priceFormater( productData.price ),
    user: uid.toString()
  };

  try {
    const productCreated = new Product( formatedData );

    // Save to DB
    await productCreated.save();

    return {
      productCreated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createProductService;
