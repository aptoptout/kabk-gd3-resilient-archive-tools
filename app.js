let express = require('express');
let config = require('./config.json');
let request = require('request');
let showdown = require('showdown');

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
            let rawMD = "" + html + "";
            let titleMD = rawMD.split("\n")[1];
            let imageMD = rawMD.split("\n")[0];
            project.image = converter.makeHtml(imageMD);
            project.projectName = titleMD.slice(2, titleMD.length);
        }
    });
});

app.use('/', routeIndex);
app.use('/transcoding/', routeRepositories);

app.listen(port);
console.log(livemessage);

module.exports = app;
