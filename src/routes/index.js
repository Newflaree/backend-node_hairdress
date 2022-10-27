const authRouter = require( './auth.route' ); 
const ourServicesCategoriesRouter = require('./ourServicesCategories.route');
const ourServicesRouter = require('./ourServices.route');
const productBrandsRouter = require('./productBrands.route');
const productCategoryRouter = require('./productCategory.route');
const productsRouter = require('./products.route');
const usersRouter = require( './users.route' );

module.exports = {
  authRouter,
  ourServicesCategoriesRouter,
  ourServicesRouter,
  productBrandsRouter,
  productCategoryRouter,
  productsRouter,
  usersRouter
}
