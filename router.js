const express = require('express');
const getItems = require('./handlers/getItems,js');
const ping = require('./handlers/ping');
const router = express.Router();

//endpoint
router.get('/ping', (req, res) => ping(req, res));
router.get('/getItems', (req, res) => getItems(req, res));


module.exports = router;
