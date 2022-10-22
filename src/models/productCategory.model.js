const { Schema, model } = require( 'mongoose' );

const ProductCategorySchema = Schema({
  name: {
    type: String,
    required: [ true, 'Name is required' ]
  },
  user: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

ProductCategorySchema.methods.toJSON = function() {
  const { __v, _id, ...productCategory } = this.toObject();
  return productCategory;
}

module.exports = model( 'ProductCategory', ProductCategorySchema );
