// Models
const { ProductCategory } = require( '../../models' );

const updateProductCategoryByIdService = async ( uid = '', id = '', data = {} ) => {
  const newData = {
    ...data,
    user: uid.toString()
  }
  console.log( dataTest );
  try {
    const productCategoryUpdated = await ProductCategory.findByIdAndUpdate( id, newData, { new: true } )
      .populate( 'user', 'name' );

    return {
      productCategoryUpdated
    };

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT-CATEGORY]'.red }: Error Detail - ${ err }` );
  }}

module.exports = updateProductCategoryByIdService;
