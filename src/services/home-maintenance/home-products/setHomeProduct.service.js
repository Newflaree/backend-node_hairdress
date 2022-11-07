// Models
const { HomeProduct } = require( '../../../models' );

const setHomeProductService = async ( id = '' ) => {
  try {
    const count = await HomeProduct.countDocuments({ showOnHome: true });

    if ( count >= 9 ) {
      return {
        statusCode: 400,
        ok: false,
        msg: 'No se pueden agregar más productos en el inicio'
      }
    }

    const newHomeProduct = new HomeProduct({ product: id })
    await newHomeProduct.save();

    return {
      statusCode: 201,
      ok: true,
      newHomeProduct
    }
  } catch ( err ) {
    console.log( `${ '[SERVICE.SET-HOME-PRODUCT]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = setHomeProductService;
