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
    const newHomeSlide = new HomeSlide( homeSlideData );
    await newHomeSlide.save();

    return {
      newHomeSlide
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-HOME-SLIDE]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createHomeSlideService;
