// Models
const { HomeSlide } = require( '../../../models' );

const updateHomeSlideByIdService = async ( id = '', homeSlideData = {} ) => {
  try {
    const homeSlideUpdated = await HomeSlide.findByIdAndUpdate( id, homeSlideData, { new: true } );

    return {
      homeSlideUpdated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-HOME-SLIDE-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = updateHomeSlideByIdService;
