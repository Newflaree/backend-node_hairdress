const { Schema, model } = require( 'mongoose' );

const ProductSchema = Schema({
  name: {
    type: String,
    required: [ true, 'Name is required' ]
  },
  desc: {
    type: String,
    requred: [ true, 'Description is required' ]
  },
  img: {
    type: String,
    required: [ true, 'Img is required' ]
  },
  stock: {
    type: Number,
    required: [ true, 'Stock is required' ]
  },
  price: {
    type: String,
    required: [ true, 'Price is required' ]
  },
  user: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'ProductCategory'
  },
  brand: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'ProductBrand'
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

ProductSchema.methods.toJSON = function() {
  const { __v, _id, ...product } = this.toObject();
  product.id = _id;
  return product;
}

module.exports = model( 'Product', ProductSchema );
