let express = require('express');
let config = require('../config.json');
let showdown = require('showdown');
let request = require('request');

let router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {data: config.data, title: config.name});
});

module.exports = router;