const express = require( 'express' );

class Server {
  constructor() {
    this.app = express();
    this.port = '3001'

    this.middlewares();
  }

  middlewares() {
    this.app.use( express.static( 'public' ) );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log( `Listening on port ${ this.port }` );
    })
  }
}

module.exports = Server;
