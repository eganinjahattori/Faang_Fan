'use strict'
const { ResponseHandler } = require('./utils/RequestResponseHandler');

module.exports.handler = async(event) => {
    return ResponseHandler.returnResponse(200, 'Home route.')
}