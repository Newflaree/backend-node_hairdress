// Models
const { ProductCategory } = require( '../../models' );

const deleteProductCategoryByIdService = async ( name = '', uid = '' ) => {
  try {

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT-CATEGORY]'.red }: Error Detail - ${ err }` );
  }}

module.exports = deleteProductCategoryByIdService;
