const { Schema, model } = require( 'mongoose' );

const OurServicesCategorySchema = Schema({
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

OurServicesCategorySchema.methods.toJSON = function() {
  const { __v, _id, ...ourServicesCategory } = this.toObject();
  ourServicesCategory.id = _id;
  return productCategory;
}

module.exports = model( 'OurServicesCategory', OurServicesCategorySchema );
