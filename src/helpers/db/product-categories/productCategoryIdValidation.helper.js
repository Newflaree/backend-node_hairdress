const { ProductCategory } = require( '../../../models' )

const productCategoryIdValidation = async ( id = '' ) => {
  const productCategoryExists = await ProductCategory.findById( id );

  if ( !productCategoryExists ) {
    throw new Error( 'There is no product category with that id' );
  }

  return true;
}

module.exports = productCategoryIdValidation;
