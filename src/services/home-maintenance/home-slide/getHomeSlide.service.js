// Models
const { HomeSlide } = require( '../../../models' );

const getHomeSlideService = async () => {
  const condition = {
    showOnHome: true
  }

  try {
    const [ total, homeSlides ] = await Promise.all([
      HomeSlide.countDocuments( condition ),
      HomeSlide.find( condition )
    ]);

    return {
      total,
      homeSlides
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-HOME-SLIDE]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getHomeSlideService;
