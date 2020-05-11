const express = require('express');
const config = require('../config.json');
const showdown = require('showdown');
const request = require('request');

const router = express.Router();

// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now(), req.url);
//     next();
// });

router.get('/:projectName', function(req, res) {
    let converter = new showdown.Converter({tables: true, openLinksInNewWindow: true});

    config.data.forEach(function (project, index) {
        if (project.projectUrlName === req.params.projectName) {
            request(project.url, function (err, resp, html) {
                const generatedHtml = converter.makeHtml(html);
                res.render('repository-layout', {body: generatedHtml, name: project.students});
            });
        }
    });
});

module.exports = router;