# [CATALOG OF ARCHIVAL RESILIENCE](https://catalog-of-archival-resilience.herokuapp.com/)
_IMD & Coding semester 2 assignment by Hannes Bernard and Martijn de Heer_

In collaboration with the International Institute of Social History (IISH), third year graphic design students of the Royal Academy of Art, The Hague, have developed long-term archival transcodings based on artefacts from the IISH. This process requires both resilient hardware and software, new digital tools and analogue strategies for transcoding media. Students in IMD and Coding will learn about current strategies and methods for archiving digital culture at the IISG. During the assignment, they will select materials from the physical archive of the IISG and also explore the hardware and tools used for transcoding and digitizing various media at the institution. The aim of this collaboration is for students to devise novel processes with existing transcoding systems at the IISG, but also develop new tools and transcoding methods that can be of interest for the IISG in thinking about how they translate between physical and digital materials.

## Development
This project is build with NodeJs.

### To do

- [x] Basic skeleton code 
- [ ] General design
- [ ] Basic structure (code-wise)
- [ ] Title design
- [ ] Meta data (OpenGraph)
- [ ] Interactions
- [ ] Organisation of all content
- [ ] Text from IISG?
- [ ] Organize and manage tags
- [ ] Convert absolute paths: replace `github` with raw.githubusercontent and remove `/blob`
- [ ] Writing text for about section

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
