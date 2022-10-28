const { Schema, model } = require( 'mongoose' );

const OurServiceSchema = Schema({
  name: {
    type: String,
    required: [ true, 'Name is required' ]
  },
  duration: {
    type: String,
    required: [ true, 'Duration is required' ]
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
    ref: 'OurServicesCategory'
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

OurServiceSchema.methods.toJSON = function() {
  const { __v, _id, ...ourService } = this.toObject();
  ourService.id = _id;
  return ourService;
}

module.exports = model( 'OurService', OurServiceSchema );
