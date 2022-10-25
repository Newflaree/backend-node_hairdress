// Models
const { ProductBrand } = require( '../../models' );

const createProductBrandService = async ( name = '', uid = '' ) => {
  try {

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT-BRAND]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createProductBrandService;
