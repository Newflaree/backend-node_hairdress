// Models
const { HomeInfo } = require( '../../../models' );

const getHomeInfoService = async () => {
  try {
    const currentHomeInfo = await HomeInfo.find();

    return {
      currentHomeInfo
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-HOME-INFO]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getHomeInfoService;
