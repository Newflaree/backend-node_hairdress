const createOurService = require( './createOurService.controller' );
const deleteOurServiceById = require( './deleteOurServiceById.controller' );
const getOurServiceById = require( './getOurServiceById.controller' );
const getOurServices = require( './getOurServices.controller' );
const updateOurServiceById = require( './updateOurServiceById.controller' );

module.exports = {
  createOurService,
  deleteOurServiceById,
  getOurServiceById,
  getOurServices,
  updateOurServiceById
}
