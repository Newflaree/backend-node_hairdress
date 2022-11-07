// Models
const { HomeInfo } = require( '../../../models' );

const updateHomeInfoService = async ( id, vision, mission, about ) => {
  const homeInfoData = {
    vision,
    mission,
    about
  }

  try {
    const homeInfoUpdated = await HomeInfo.findByIdAndUpdate( id, homeInfoData, { new: true } );

    return {
      homeInfoUpdated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-HOME-INFO]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = updateHomeInfoService;
