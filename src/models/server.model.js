const express = require( 'express' );
const cors = require( 'cors' );
// Database Config
const dbConnection = require( '../db/db.config');
// Routes
const {
  authRouter,
  homeInfoRouter,
  homeProductsRouter,
  homeSlideRouter,
  ourServicesCategoriesRouter,
  ourServicesRouter,
  productBrandsRouter,
  productCategoryRouter,
  productsRouter,
  usersRouter
} = require( '../routes' );

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.apiPaths = {
      auth:                  '/api/auth',
      homeInfo:              '/api/home-info',
      homeProducts:          '/api/home-products',
      homeSlide:             '/api/home-slide',
      ourServices:           '/api/our-services',
      outServicesCategories: '/api/our-services-categories',
      productBrands:         '/api/product-brands',
      productCategories:     '/api/product-categories',
      products:              '/api/products',
      users:                 '/api/users'
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
    this.app.use( this.apiPaths.homeInfo, homeInfoRouter );
    this.app.use( this.apiPaths.homeProducts, homeProductsRouter );
    this.app.use( this.apiPaths.homeSlide, homeSlideRouter );
    this.app.use( this.apiPaths.ourServices, ourServicesRouter );
    this.app.use( this.apiPaths.outServicesCategories, ourServicesCategoriesRouter );
    this.app.use( this.apiPaths.productBrands, productBrandsRouter );
    this.app.use( this.apiPaths.productCategories, productCategoryRouter );
    this.app.use( this.apiPaths.products, productsRouter );
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
