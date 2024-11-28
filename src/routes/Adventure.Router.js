const express = require('express')
const router = express.Router();

const {CreateNewAdventureController} = require('../controller/Adventure.Controller.js')


router.post('/add', CreateNewAdventureController)

module.exports = router;