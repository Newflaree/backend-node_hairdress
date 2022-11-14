const { Schema, model } = require( 'mongoose' );

const HomeSlideSchema = Schema({
  img: {
    type: String,
    required: [ true, 'Image is mandatory' ]
  },
  title: {
    type: String,
    required: [ true, 'Title is mandatory' ]
  },
  desc: {
    type: String,
    required: [ true, 'Description is mandatory' ]
  },
  url: {
    type: String,
    required: [ true, 'Url is mandatory' ]
  },
  showOnHome: {
    type: Boolean,
    default: true
  }
});

HomeSlideSchema.methods.toJSON = function() {
  const { __v, _id, ...homeSlide } = this.toObject();
  homeSlide.id = _id;
  return homeSlide;
}

module.exports = model( 'HomeSlide', HomeSlideSchema );
