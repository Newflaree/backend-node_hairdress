// Models
const { HomeGallery } = require( '../../../models' );

const createHomeGalleryService = async ( img ) => {
  try {
    const count = await HomeGallery.countDocuments({ showOnHome: true });

    if ( count >= 8 ) {
      return {
        statusCode: 400,
        ok: false,
        msg: 'No se pueden agregar más elementos a la galería'
      }
    }

    const newHomeGalleryItem = new HomeGallery({ img });
    await newHomeGalleryItem.save();

    return {
      statusCode: 201,
      ok: true,
      newHomeGalleryItem
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-HOME-GALLERY]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createHomeGalleryService;
