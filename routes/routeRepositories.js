const express = require('express');
const config = require('../config.json');
const showdown = require('showdown');
const request = require('request');
const cheerio = require('cheerio');

const router = express.Router();

router.get('/:projectName', function(req, res) {
    let converter = new showdown.Converter({tables: true, openLinksInNewWindow: true});

    config.data.forEach(function (project, index) {

        if (project.projectUrlName === req.params.projectName) {

            request(project.url, function (err, resp, html) {

                let generatedHtml = converter.makeHtml(html);
                let $ = cheerio.load(generatedHtml);
                let coverImgSrc;

                $('img').each(function(index){
                    if ($(this).attr('src').includes('github.com')) {
                        newSrc = $(this).attr('src').replace('github', 'raw.githubusercontent');
                        newSrc = newSrc.replace('/blob', '');

                        $(this).attr('src', newSrc);

                        if(index === 0) {
                            coverImgSrc = newSrc;
                        }
                    }

                });

                res.render('repository-layout', {body: $.html(), name: project.students, projectTitle: project.projectName, cover: coverImgSrc, descriptionText: project.description, userName: project.projectUrlName});
            });
        }
    });
});

module.exports = router;