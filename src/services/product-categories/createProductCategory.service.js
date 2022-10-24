// Models
const { ProductCategory } = require( '../../models' );

const createProductCategoryService = async ( name = '', uid = '' ) => {
  const data = {
    name: name.toUpperCase(), 
    user: uid
  }

  try {
    const productCategory = new ProductCategory( data );
    await productCategory.save();

    return {
      productCategory
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT-CATEGORY]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createProductCategoryService;
