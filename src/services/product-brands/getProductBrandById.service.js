// Models
const { ProductBrand } = require( '../../models' );

const getProductBrandByIdService = async ( id = '' ) => {
  try {
    const productBrand = await ProductBrand.findById( id );

    return {
      productBrand
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-BRAND-BY-ID]'.red }: Error Detail - ${ err }` );
  }}

module.exports = getProductBrandByIdService;
