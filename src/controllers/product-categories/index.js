const createProductCategory = require("./createProductCategory.controller");
const deleteProductCategoryById = require("./deleteProductCategoryById.controller");
const getProductCategories = require("./getProductCategories.controller");
const getProductCategoryById = require("./getProductCategoryById.controller");
const updateProductCategoryById = require("./updateProductCategoryById.controller");

module.exports = {
  createProductCategory,
  deleteProductCategoryById,
  getProductCategories,
  getProductCategoryById,
  updateProductCategoryById
}
