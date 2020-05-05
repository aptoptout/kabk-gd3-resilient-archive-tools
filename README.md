# Resilient Archive Transcoding Catalogue
_IMD & Coding semester 2 assignment by Hannes Bernard and Martijn de Heer_

## Development
This project is build with NodeJs.

### To do

- [x] Basic skeleton code 
- [ ] General design
- [ ] Basic structure (code-wise)
- [ ] About section
- [ ] Title design
- [ ] Meta data (OpenGraph)
- [ ] Interactions
- [ ] Organisation of all content
- [ ] Text from IISG?
- [ ] Organize and manage tags
- [ ] convert absolute paths: replace `github` with raw.githubusercontent and remove `/blob` 

### Requirements
Make sure your setup meets the following requirements:

- yarn
- node >= 8

#### Dependencies

- nodemon (hot reloading during development)
- express (backend routing)
- request (handling http(s) requests)
- cheerio (core jQuery for parsing HTML)
- showdown (generating HTML from MarkDown)
- ejs (templating and mixing JS w/ HTML)

### `yarn install`

Installs all the required dependencies.

### `yarn start`
Starts the development server with hot reloading enabled, you can visit [`http://localhost:3000`](http://localhost:3000) to see the application running.

### Folder structure
```
kabk-gd3-resilient-archive-tools/
  public/
    stylesheet.css
  routes/
    routeIndex.js
    routeRepositories.js
  views/
    header.ejs
    index.ejs
    repository-layout.ejs
  app.js
  config.json
  package.json
  README.md
  yarn.lock
```
### `config.json`
A JSON containing all students and some data on their projects. Some parts will be populated automatically by fetching information from the README's, other keys are hard coded, such as names of students.

```
{
  "students": [],
  "projectName": "",
  "projectUrlName": "",
  "url": "",
  "image" : "",
  "description":"",
  "tags": []
}
```
