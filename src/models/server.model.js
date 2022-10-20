const express = require( 'express' );

class Server {
  constructor() {
    this.app = express();
    this.port = '3001'
    // TODO: Set paths por API

    // Init methods
    this.dbConnect();
    this.middlewares();
    this.routes();
  }

  async dbConnect() {
    throw new Error( 'dbConnect method not implemented'.red );
  }

  middlewares() {
    throw new Error( 'Middlewares method not implemented'.red );
  }

  routes() {
    throw new Error( 'Routes method not implemented'.red );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log( `${ '[SERVER.LISTEN]'.green }Listening on port ${ this.port.green }` );
    })
  }
}

module.exports = Server;
