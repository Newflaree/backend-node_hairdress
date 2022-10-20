const express = require( 'express' );
const cors = require( 'cors' );
// Database Config
const dbConnection = require( '../db/db.config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // TODO: Set paths por API

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
  }

  routes() {
    //throw new Error( 'Routes method not implemented'.red );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    })
  }
}

module.exports = Server;
