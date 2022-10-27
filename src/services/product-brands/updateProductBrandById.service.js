// Models
const { ProductBrand } = require( '../../models' );

const updateProductBrandByIdService = async ( uid = '', id = '', data = {} ) => {
  newData = {
    ...data,
    user: uid.toString()
  }

  try {
    const productBrandUpdated = await ProductBrand.findByIdAndUpdate( id, newData, { new: true } )
      .populate( 'user', 'name' );
    
    return {
      productBrandUpdated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-PRODUCT-BRAND-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = updateProductBrandByIdService;
