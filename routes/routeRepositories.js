let express = require('express');
let config = require('../config.json');
let showdown = require('showdown');
let request = require('request');

let router = express.Router();

// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now(), req.url);
//     next();
// });

router.get('/:projectName', function(req, res) {
    let converter = new showdown.Converter({tables: true, openLinksInNewWindow: true});

    config.data.forEach(function (project, index) {
        if (project.projectUrlName === req.params.projectName) {
            request(project.url, function (err, resp, html) {
                let generatedHtml = converter.makeHtml(html);
                res.render('repository-layout', {body: generatedHtml, name: project.students});
            });
        }
    });
});

module.exports = router;