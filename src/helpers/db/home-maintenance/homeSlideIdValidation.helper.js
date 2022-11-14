const { HomeSlide } = require( '../../../models' );

const homeSlideIdValidation = async ( id = '' ) => {
  const homeSlideExists = await HomeSlide.findById( id );

  if ( !homeSlideExists ) {
    throw new Error( 'No existe una portada con ese ID' );
  }

  return true;
}

module.exports = homeSlideIdValidation;
