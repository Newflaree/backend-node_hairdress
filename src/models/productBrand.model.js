const { Schema, model } = require( 'mongoose' );

const ProductBrandSchema = Schema({
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

ProductBrandSchema.methods.toJSON = function() {
  const { __v, _id, ...productBrand } = this.toObject();
  productBrand.id = _id;
  return productBrand;
}

module.exports = model( 'ProductBrand', ProductBrandSchema );
