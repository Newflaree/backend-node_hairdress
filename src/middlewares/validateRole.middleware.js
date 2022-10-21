const { request, response } = require( 'express' );

const validateRole = async ( req = request, res = response, next ) => {
  if ( !req.user ) {
    return res.status( 401 ).json({
      ok: false,
      msg: 'You want to verify the role without validate token before'
    });
  }

  try {
    const { role, name } = req.user;

    if ( role !== 'ADMIN_ROLE' ) {
      return res.status( 401 ).json({
        ok: false,
        msg: `${ name } is not ADMIN`
      });
    }

    next();

  } catch ( err ) {
    console.log( `${ '[MIDDLEWARE.VALIDATE-ROLE]'.red }: Error Detail - ${ err }` );

    res.status( 401 ).json({
      ok: false,
      msg: 'Token is invalid'
    });
  }
}

module.exports = validateRole;
