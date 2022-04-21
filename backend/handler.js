'use strict'
const { ResponseHandler } = require('./utils/RequestResponseHandler');
// const express = require('express');

module.exports.handler = async(event) => {
    return ResponseHandler.returnResponse(200, 'Home route.')
}