// Models
const { ProductCategory } = require( '../../models' );

const getProductCategoriesService = async ( query, from, limit ) => {
  try {
    const [ total, productCategories ] = await Promise.all([
      ProductCategory.countDocuments( query ),
      ProductCategory.find( query )
        .populate( 'user', 'name' )
        .skip( Number( from ) )
        .limit( Number( limit ) ),
    ]);

    return {
      total,
      productCategories
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-CATEGORIES]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getProductCategoriesService;
