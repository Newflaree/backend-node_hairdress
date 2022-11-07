// Models
const { HomeInfo } = require( '../../../models' );

const createHomeInfoService = async ( vision = '', mission = '', about = '' ) => {
  try {
    const count = await HomeInfo.countDocuments();

    if ( count >= 1 ) {
      return {
        statusCode: 400,
        ok: false,
        msg: 'Ya existe información para editar'
      }
    }

    const homeInfo = new HomeInfo({ vision, mission, about });
    await homeInfo.save();

    return {
      statusCode: 200,
      ok: true,
      homeInfo
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-HOME-INFO]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createHomeInfoService;
