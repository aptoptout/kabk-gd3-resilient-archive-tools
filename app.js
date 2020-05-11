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
            const rawMarkDown = "" + html + "";

            const titleMarkDown = rawMarkDown.split("\n")[1];
            const titleHTML = converter.makeHtml(titleMarkDown);

            const imageMarkDown = rawMarkDown.split("\n")[0];
            const imageHTML = converter.makeHtml(imageMarkDown);
            let imageHTMLSrc = $('img', imageHTML).attr('src');

            const baseUrlSplit = project.url.split('/');
            baseUrlSplit.pop();

            project.image = $('img', imageHTML);
            project.projectName = $('h1', titleHTML).text();
        }
    });
});

app.use('/', routeIndex);
app.use('/transcoding/', routeRepositories);

app.listen(port);
console.log(livemessage);

module.exports = app;
