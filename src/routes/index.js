const authRouter = require( './auth.route' ); 
const productBrandsRouter = require('./productBrands.route');
const productCategoryRouter = require('./productCategory.route');
const usersRouter = require( './users.route' );

module.exports = {
  authRouter,
  productBrandsRouter,
  productCategoryRouter,
  usersRouter
}

