const { Schema, model } = require( 'mongoose' );

const HomeGallerySchema = Schema({
  img: {
    type: String,
    requred: [ true, 'Img is mandatory' ]
  },
  showOnHome: {
    type: Boolean,
    default: true
  }
});

HomeGallerySchema.methods.toJSON = function() {
  const { __v, _id, ...homeGallery } = this.toObject();
  homeGallery.id = _id;
  return homeGallery;
}

module.exports = model( 'HomeGallery', HomeGallerySchema );
