const express = require('express');
const ping = require('./handlers/ping');
const router = express.Router();

//endpoint
router.get('/ping', (req, res) => ping(req, res));


module.exports = router;
