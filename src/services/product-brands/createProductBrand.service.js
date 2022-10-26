// Models
const { ProductBrand } = require( '../../models' );

const createProductBrandService = async ( name = '', uid = '' ) => {
  const data = {
    name: name.toUpperCase(),
    user: uid
  }
  try {
    const productBrand = new ProductBrand( data );
    await productBrand.save();

    return {
      productBrand
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT-BRAND]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createProductBrandService;
