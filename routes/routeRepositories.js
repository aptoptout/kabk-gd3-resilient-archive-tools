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

                $('h1').each(function(index) {
                    if(index > 0) {
                        const idAttribute = $(this).attr('id');
                        $(this).replaceWith(`<h2 id="${idAttribute}">` + $(this).html() +'</h2>')
                    }
                });

                $('img').each(function(index) {
                    if ($(this).attr('src').includes('github.com')) {
                        newSrc = $(this).attr('src').replace('github', 'raw.githubusercontent');
                        newSrc = newSrc.replace('/blob', '');

                        $(this).attr('src', newSrc);

                        // console.log(index, newSrc);
                        //
                        // if(index < 1) {
                        //     coverImgSrc = newSrc;
                        //     $(this).css('display', 'none');
                        // }
                    }
                });

                coverImgSrc = $('p:first-of-type img').attr('src');
                $('p:first-of-type img').css('display', 'none');

                const tocHeading = $('h3#tableofcontents').html();
                const tocList = $('ol:first-of-type').html();

                $('h3#tableofcontents').css('display', 'none');
                $('ol:first-of-type').css('display', 'none');

                res.render('repository-layout', {body: $.html(), tocheading: tocHeading, toclist: tocList, name: project.students, projectTitle: project.projectName, cover: coverImgSrc, descriptionText: project.description, userName: project.projectUrlName});
            });
        }
    });
});

module.exports = router;