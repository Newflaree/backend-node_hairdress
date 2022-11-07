const { Schema, model } = require( 'mongoose' );

const HomeProductSchema = Schema({
  product: {
    requred: true,
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  showOnHome: {
    type: Boolean,
    default: true
  }
});

HomeProductSchema.methods.toJSON = function() {
  const { __v, _id, ...homeProduct } = this.toObject();
  homeProduct.id = _id;
  return homeProduct;
}

module.exports = model( 'HomeProduct', HomeProductSchema );
