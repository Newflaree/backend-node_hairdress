// Models
const { ProductCategory } = require( '../../models' );

const createProductCategoryService = async ( uid = '' ) => {
  try {

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT-CATEGORY]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createProductCategoryService;

