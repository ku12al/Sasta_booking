const express = require('express');

const cityRouter = express.Router();
const {cityController, cityAllController, updateController, deleteCityController} = require('../controller/City.controller');

cityRouter.post('/city',cityController)
cityRouter.get('/cityAll',cityAllController)
cityRouter.put('/update', updateController)
cityRouter.delete('/delete', deleteCityController)

module.exports = cityRouter