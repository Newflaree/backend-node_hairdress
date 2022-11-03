const { Schema, model } = require( 'mongoose' );

const ProductCategorySchema = Schema({
  mission: {
    type: String,
    required: [ true, 'Mission is required' ],
    default: ''
  },
  vision: {
    type: String,
    required: [ true, 'Vision is required' ],
    default: ''
  },
  about: {
    type: Boolean,
    required: [ true, 'About is required' ],
    default: ''
  }
});

ProductCategorySchema.methods.toJSON = function() {
  const { __v, _id, ...productCategory } = this.toObject();
  productCategory.id = _id;
  return productCategory;
}

module.exports = model( 'ProductCategory', ProductCategorySchema );
