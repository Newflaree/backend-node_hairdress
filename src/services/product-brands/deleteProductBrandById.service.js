// Models
const { ProductBrand } = require( '../../models' );

const deleteProductBrandByIdService = async ( id = '' ) => {
  try {

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-PRODUCT-BRAND-BY-ID]'.red }: Error Detail - ${ err }` );
  }}

module.exports = deleteProductBrandByIdService;
