const createHomeGalleryService = require( './createHomeGallery.service' );
const deleteHomeGalleryByIdService = require( './deleteHomeGalleryById.service' );
const getHomeGalleryService = require( './getHomeGallery.service' );
const updateHomeGalleryByIdService = require( './updateHomeGalleryById.service' );

module.exports = {
  createHomeGalleryService,
  getHomeGalleryService,
  updateHomeGalleryByIdService,
  deleteHomeGalleryByIdService
}
