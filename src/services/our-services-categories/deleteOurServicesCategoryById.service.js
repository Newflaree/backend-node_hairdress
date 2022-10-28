// Models
const { OurServicesCategory } = require( '../../models' );

const deleteOurServicesCategoryByIdService = async ( id = '' ) => {
  try {
    await OurServicesCategory.findByIdAndUpdate( id, { isActive: false } );

    return {
      msg: 'Categoría de servicios eliminada con éxito'
    }
  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-OUR-SERVICES-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteOurServicesCategoryByIdService;
