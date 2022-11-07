const { Schema, model } = require( 'mongoose' );

const HomeInfoSchema = Schema({
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
    type: String,
    required: [ true, 'About is required' ],
    default: ''
  }
});

HomeInfoSchema.methods.toJSON = function() {
  const { __v, _id, ...homeInfo } = this.toObject();
  homeInfo.id = _id;
  return homeInfo;
}

module.exports = model( 'HomeInfo', HomeInfoSchema );
