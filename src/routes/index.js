const authRouter = require( './auth.route' ); 
const productBrandsRouter = require('./productBrands.route');
const productCategoryRouter = require('./productCategory.route');
const productsRouter = require('./products.route');
const usersRouter = require( './users.route' );

module.exports = {
  authRouter,
  productBrandsRouter,
  productCategoryRouter,
  productsRouter,
  usersRouter
}
