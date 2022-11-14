// Models
const { HomeSlide } = require( '../../../models' );

const createHomeSlideService = async ( img, title, desc, url ) => {
  const homeSlideData = {
    img,
    title,
    desc,
    url
  };

  try {
    const count = await HomeSlide.countDocuments({ showOnHome: true });

    if ( count >= 4 ) {
      return {
        statusCode: 400,
        ok: false,
        msg: 'No se pueden agregar más portadas al inicio'
      }
    }

    const newHomeSlide = new HomeSlide( homeSlideData );
    await newHomeSlide.save();

    return {
      statusCode: 201,
      ok: true,
      newHomeSlide
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-HOME-SLIDE]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createHomeSlideService;
