// Models
const { ProductCategory } = require( '../../models' );

const getProductCategoryByIdService = async ( id = '' ) => {
  try {
    const productCategory = await ProductCategory.findById( id )
      .populate( 'user', 'name' );

    return {
      productCategory
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT-CATEGORY]'.red }: Error Detail - ${ err }` );
  }}

module.exports = getProductCategoryByIdService;
