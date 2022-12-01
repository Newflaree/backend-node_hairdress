// Models
const { Product } = require( '../../models' );

const allowedCollections = ( collection = '', collections = [] ) => {
  const included = collections.included( collection );

  if ( !included ) {
    throw new Error( `La colección ${ collection } no es permitida` );
  }

  return true;
}

module.exports = allowedCollections;
