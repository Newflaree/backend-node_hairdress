const express = require( 'express' );
const cors = require( 'cors' );
// Database Config
const dbConnection = require( '../db/db.config');
// Routes
const { usersRouter, authRouter } = require( '../routes' );

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.apiPaths = {
      auth: '/api/auth',
      users: '/api/users'
    }

    // Init methods
    this.dbConnect();
    this.middlewares();
    this.routes();
  }

  async dbConnect() {
    await dbConnection();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
  }

  routes() {
    this.app.use( this.apiPaths.auth, authRouter );
    this.app.use( this.apiPaths.users, usersRouter );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    })
  }
}

module.exports = Server;
