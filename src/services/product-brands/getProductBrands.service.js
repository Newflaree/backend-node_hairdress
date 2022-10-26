// Models
const { ProductBrand } = require( '../../models' );

const getProductBrandsService = async ( query, from, limit ) => {
  try {
    const [ total, productBrands ] = await Promise.all([
      ProductBrand.countDocuments( query ),
      ProductBrand.find( query )
        .populate( 'user', 'name' )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ]);

    return {
      total,
      productBrands
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-BRANDS]'.red }: Error Detail - ${ err }` );
  }}

module.exports = getProductBrandsService;
