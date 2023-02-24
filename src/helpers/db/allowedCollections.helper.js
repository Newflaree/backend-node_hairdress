// Models
const { Product } = require( '../../models' );

const allowedCollections = ( collection = '', collections = [] ) => {
  const isIncluded = collections.included( collection );

  if ( !isIncluded ) {
    throw new Error( `La colección ${ collection } no es permitida` );
  }

  return true;
}

module.exports = allowedCollections;
