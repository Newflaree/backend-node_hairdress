// Models
const { HomeProduct } = require( '../../../models' );

const getHomeProductsService = async () => {
  const condition = { showOnHome: true };

  try {
    const [ total, homeProducts ] = await Promise.all([
      HomeProduct.countDocuments( condition ),
      HomeProduct.find( condition )
        .populate( 'product', 'name img' )
    ]);

    return {
      total,
      homeProducts
    }
  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-HOME-PRODUCTS]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getHomeProductsService;
