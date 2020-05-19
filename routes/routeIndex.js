const express = require('express');
const config = require('../config.json');

const router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {data: config.data, title: config.name});
});

module.exports = router;