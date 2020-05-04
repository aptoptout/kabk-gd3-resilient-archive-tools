let express = require('express');
let config = require('./config.json');
let request = require('request');
let showdown = require('showdown');
let $ = require('cheerio');

let routeIndex = require('./routes/routeIndex');
let routeRepositories = require('./routes/routeRepositories');

let app = express();

let port = process.env.PORT || 3000;
let livemessage = `I'm Alive! Meet your creation at http://localhost:${port}`;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

let converter = new showdown.Converter();

config.data.forEach(function (project) {
    request(project.url, function (err, resp, html) {

        if(html.length > 0) {
            const rawMD = "" + html + "";

            const titleMD = rawMD.split("\n")[1];
            const titelHTML = converter.makeHtml(titleMD);

            const imageMD = rawMD.split("\n")[0];
            const imageHTML = converter.makeHtml(imageMD)

            const baseUrlSplit = project.url.split('/');
            baseUrlSplit.pop();

            const baseUrlClean = baseUrlSplit.join() + '/';

            const oldSourceImg = $('img', imageHTML).attr('src');
            const newSourceImg = baseUrlClean.replace(/,/g, '/') + oldSourceImg;

            project.image = $('img', imageHTML).attr('src', newSourceImg);
            project.projectName = $('h1', titelHTML).text();;
        }
    });
});

app.use('/', routeIndex);
app.use('/transcoding/', routeRepositories);

app.listen(port);
console.log(livemessage);

module.exports = app;
