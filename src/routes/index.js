const authRouter = require( './auth.route' ); 
const homeGalleryRouter = require( './homeGallery.route' );
const homeInfoRouter = require('./homeInfo.route');
const homeProductsRouter = require('./homeProducts.route');
const ourServicesCategoriesRouter = require('./ourServicesCategories.route');
const ourServicesRouter = require( './ourServices.route' );
const productBrandsRouter = require( './productBrands.route' );
const productCategoryRouter = require( './productCategory.route' );
const productsRouter = require(' ./products.route' );
const usersRouter = require( './users.route' );

module.exports = {
  authRouter,
  homeGalleryRouter,
  homeInfoRouter,
  homeProductsRouter,
  ourServicesCategoriesRouter,
  ourServicesRouter,
  productBrandsRouter,
  productCategoryRouter,
  productsRouter,
  usersRouter
}
