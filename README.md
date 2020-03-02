# Transcoding tools for a resilient archive

IMD & Coding semester 2 assignment 

## Briefing

Research, design and develop a long-term archival solution for a single digital cultural commodity. This requires both resilient hardware and software, digital tools and analogue strategies. Select one artefact from the physical archives of the IISG archive (Poster or Pin or Object or Book) which you will be working with to transcode.

During this project the process, research and documentation on the artifact, the transcoding tool(s) and topics will have to be logged in Markdown (a lightweight markup language with plain text formatting syntax). This document will function as the repository for all the work and all Markdown documents will be eventually compiled into one big collective repository of transcoding tools and research on how to create resilient archives.

### Transcoding

Transcoding is the direct conversion of one encoding to another, such as with image files (PNG/JPG) or movie files (MP4/MOV). This is usually done for maintaining file support, when the target environment has limited storage capacity that mandates a reduced file size or converting incompatible or obsolete data to a better-supported format.

**Input, process and target format**

Transcoding is a two-step process in which the original data is decoded to an intermediate uncompressed format, which is then encoded into the target format. Simply described as having some input data which is being processed and then outputted to the target format.

All three variables input, process and target format are important to do research on in relation to your artifact, it's topic and your concept. How do you capture your artifcat, what is the input for your transcoding tool? A video feed, set of images or spoken word can all be types of input depending on how you want to archive the artifact.

The target format, the format that is archived and will represent the artifact in your archive is what will determine your process, the process of transcoding your input to the target format. The target format should be a format that creates a resilient archive.

The process where the actual transcoding happens will depend on the type of input and the type of target format.

**Artifacts**

The key drawback of transcoding in lossy formats is decreased quality. Compression artifacts are cumulative, so transcoding causes a progressive loss of quality with each successive generation, known as digital generation loss.

**Transcoding === storage**

Transcoding happens on all our devices all the time. Very few devices output raw uncompressed footage. In the same omnipresent way tools/software for transcoding are everywhere such as Quicktime, Adobe Media Encoder, Photoshop, etc. Transcoding is happening when you upload your video to YouTube or Vimeo in order to make sure videos are stored correctly on their servers. Web clients and servers request a different format then cinema or printers. That's why transcoding is a process our storage obsessed society can't live without.

### Programming languages and environments

Unlike the scraping assignment I encourage to explore other programming options than Web-based programming (HTML, CSS and JavaScript). Depending on what kind of transcoding tool(s) and type of archive you want to develop you can choose from a wide variety of languages, environments and libraries. Think about this in terms of concept, outcome but don't forget the practicality that using a completely new language can come with additional learning curve.

Some examples of possible tools, environments and languages to use to create your transcoding tools:

1. **Javascript**
    - Plain web stack (including HTML, CSS)
    - NodeJS
    - P5.js
    - Three.js (3D oriented)
2. **Java**
    - Processing
    - Arduino
3. **C#** (feels familiar to Java and hence *Processing*)
    - Unity (scripting inside Unity)
4. **C++** (feels familiar to Java and hence *Processing*)
    - openFrameworks

Each of these come with their own speciality. Processing is great in certain things and NodeJS or Arduino in others. Decide based on how you want to build your resilient archive and the types of formats/data you are dealing with.

### Markdown

Markdown a mark-up language as is HTML. It's very easy to use and write. In all of the GitHub repo's you've created this year you were already using it in the [README.md](http://readme.md) file as `.md` stands for Markdown.

The documentation will also happen in the [README.md](http://readme.md) file so as always ceate a GitHub repo for this project and start writing in the README.md file your research, process and documentation for your tool(s).

Here's a the basic syntax of Markdown: [https://www.markdownguide.org/basic-syntax](https://www.markdownguide.org/basic-syntax)

### Documentation

The documentation of your tool should consist of the following:

1. Your perspective, concept and approach of the archive, the artifact and transcoding
2. Research related to the artifact and tool
3. Process of creating the tool
4. Your findings when transcoding and how does this reflect on the artifact
5. The documentation on how to access, install and use your tool

Important to note is that since this all will be writtin in one file is that you have to keep in mind that it can't have multiple pages but should read and flow like a single long document. Think of the structure of this document, how does it fit within your concept, how does it complement the tool and possibly the artifact? How do you create a resilient documentation?

---

## Deliverables

- Digital transcoding tool(s) _(coding class specific deliverable)_
- A number of transcodings (using the digital tools and more) of a physical artefact into diverse and resilient media. _(IMD class specific deliverable)_
- The documentation document in Markdown (including concept, research, process, reflection and documentation of tool) _(deliverable for both classes)_

## Outcomes

A digital, screen-based ***Collection of Archival Resilience***, featuring:

- 40 Physical Artefacts from the IISG transcoded into diverse media (multiple transcodings for each)
- A repository of 40 transcoding tools (including documentation & instructions)

The outcomes (including both analog transcodings and the digital repository of tools) will be exhibited at the IISG. Students will also present or give a reading of their processes, transcoding tools and research. **NB: Your Markdown document is therefor your primary design format for all outcomes.** 

---

## Works using various ways of transcoding

### The SKOR Codex by Societe Anonyme

[The SKOR Codex](http://societeanonyme.la/#codex) is a printed book which will be sent to different locations on earth in the year 2012. It contains binary transcoded image and sound files selected to portray the diversity of life and culture at the Foundation for Art and Public Domain (SKOR), and is intended for any intelligent terrestrial life form, or for future humans, who may find it. It comes with instructions on how to 'read' or 'decode' the binary sheets.

![http://societeanonyme.la/images/codex-open-4.jpg](http://societeanonyme.la/images/codex-open-4.jpg)

![http://societeanonyme.la/images/codex-open-2.jpg](http://societeanonyme.la/images/codex-open-2.jpg)

### Moon Drawings by Golan Levin

Moon Drawings is a project to extend the reach of artistic expression to the Moon. Using a tool on the Moon Drawings web site, nearly nine thousand people contributed single-line drawings to an online database: a collection of communications that ranged from whimsical doodles and personal signatures to symbols of hope, solemn wishes and eternal visual forms. Micro-etched onto a sapphire disc, and set into a sculpture called the Moon Arts Ark, these drawings will be shuttled to the Moon aboard a robotic lander/rover in 2019 by our partners at Astrobotic Technology and the CMU Planetary Robotics Lab. If conditions permit, a limited number of these drawings will also be traced by the rover's wheels into the Moon's soil. These "gifts for the moon" will remain there for potentially millions of years: a poetic gesture reaching out, far beyond any objective existence on Earth.

![http://www.flong.com/storage/images/projects/moondrawings_page_665x759.jpg](http://www.flong.com/storage/images/projects/moondrawings_page_665x759.jpg)

![http://www.flong.com/storage/images/projects/moondrawings_discphoto_665x460.jpg](http://www.flong.com/storage/images/projects/moondrawings_discphoto_665x460.jpg)

![http://www.flong.com/storage/images/projects/moondrawings_microscope_665x374.jpg](http://www.flong.com/storage/images/projects/moondrawings_microscope_665x374.jpg)

### Deleted city by Richard Vijgen

The Deleted City is a digital archaeology of the world wide web as it exploded into the 21st century. At that time the web was often described as an enormous digital library that you could visit or contribute to by building a homepage. The early citizens of the net (or netizens) took their netizenship serious, and built homepages about themselves and subjects they were experts in.

![https://lh3.googleusercontent.com/proxy/NLJG5HbreAIHC51AmaQJ_iGmXlSGgF0R36-Vz9u4CtT8jSPAQL-k9xhNOdYFpU6w2uCwspO0RrkzgmeAxT4x5Q](https://lh3.googleusercontent.com/proxy/NLJG5HbreAIHC51AmaQJ_iGmXlSGgF0R36-Vz9u4CtT8jSPAQL-k9xhNOdYFpU6w2uCwspO0RrkzgmeAxT4x5Q)

![https://countermapcollection.org/files/3614/2843/8825/DeletedCity1.jpg](https://countermapcollection.org/files/3614/2843/8825/DeletedCity1.jpg)

### Vacant NL and Dutch Atlas of Vacancy by RAAAF

For the Venice Architecture Biennale 2010, curator RAAAF was invited by the Netherlands Architecture Institute (NAI) to make a statement about the potential of landscape architecture to contribute to resolving the complex challenges that our society faces today. These challenges call for innovation; for a culture centered on design skills and cooperation between scientists and creative pioneers. 

The archive and atlas ‘Vacant NL’ calls upon the Dutch government to make use of the enormous potential of inspiring, unoccupied buildings from the 17th, 18th, 19th, 20th and 21st centuries for innovation within the creative knowledge economy. By recording several properties, surroundings and spatial dimensions they've created a large map of vacancy in the Netherlands.

![https://images.dezwijger.nl/unsafe/1500x999/smart/https%3A%2F%2Fadmin.dezwijger.nl%2Fwp-content%2Fuploads%2F2015%2F12%2FRAAAF-Rietveld-Architecture-Art-Affordances-Vacant-NL-000477image.jpg](https://images.dezwijger.nl/unsafe/1500x999/smart/https%3A%2F%2Fadmin.dezwijger.nl%2Fwp-content%2Fuploads%2F2015%2F12%2FRAAAF-Rietveld-Architecture-Art-Affordances-Vacant-NL-000477image.jpg)

[https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.raaaf.nl%2Fimages%2FRAAAF-Rietveld-Architecture-Art-Affordances-DutchAtlasofVacancy-000541image.jpg%3Fw%3D2880&f=1&nofb=1](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.raaaf.nl%2Fimages%2FRAAAF-Rietveld-Architecture-Art-Affordances-DutchAtlasofVacancy-000541image.jpg%3Fw%3D2880&f=1&nofb=1)

[https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.raaaf.nl%2Fimages%2FRAAAF-Rietveld-Architecture-Art-Affordances-DutchAtlasofVacancy-000542image.jpg%3Fw%3D2880&f=1&nofb=1](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.raaaf.nl%2Fimages%2FRAAAF-Rietveld-Architecture-Art-Affordances-DutchAtlasofVacancy-000542image.jpg%3Fw%3D2880&f=1&nofb=1)

### Timeline by Thomas Hirschhorn

Although less to do with transcoding of formats the ways of how Hirschhorn builds his archival works as altars, kiosks, and monuments do require a set of methods. Timeline, a large-scale collage of images, written statements, and text excerpts, is an example of using collage, linking and cross-media narrative building as methods to build an archive. 

![https://www.diaart.org/media/w1050h700/webimages/hir-timeline-install-02-sm.jpg](https://www.diaart.org/media/w1050h700/webimages/hir-timeline-install-02-sm.jpg)

### No Ghost Just a Shell by Philippe Parreno and Pierre Huyghe

[No Ghost Just A Shell](https://www.mmparis.com/noghost.html) was initiated by Philippe Parreno and Pierre Huyghe in 1999. They acquired the copyright for a figure called 'Annlee' and her original image from the Japanese agency 'Kworks', which develops figures (almost actors) for cartoons, comic strips, advertising and video games of the booming Japanese Manga industry. 'Annlee' was a cheap model: the price of a Manga figure relates to the complexity of its character traits and thus its ability to adapt to a story-line and 'survive' several episodes. 'Annlee' had no particular qualities, and so she would have disappeared from the scene very quickly. "True heroes are rare and extremely expensive …" (Parreno) Buying 'Annlee' rescued her from an industry that had condemned her to death.

Parreno and Huyghe have created several works with 'Annlee' including posters, animation and texts.

![https://www.mmparis.com/noghost/trickster.jpg](https://www.mmparis.com/noghost/trickster.jpg)

![https://live.staticflickr.com/2581/4175353342_6359d2885c_h.jpg](https://live.staticflickr.com/2581/4175353342_6359d2885c_h.jpg)

### Voyager Golden Record

The Voyager Golden Records are two phonograph records that were included aboard both Voyager spacecrafts launched in 1977. The records contain sounds and images selected to portray the diversity of life and culture on Earth, and are intended for any intelligent extraterrestrial life form who may find them. The records are a sort of time capsule. On the cover instructions were added on how to play the recorded sounds. You can see the record attached to the Voyager spacecraft in the middle-bottom-left.

![https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_Sounds_of_Earth_-_GPN-2000-001976.jpg/1200px-The_Sounds_of_Earth_-_GPN-2000-001976.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_Sounds_of_Earth_-_GPN-2000-001976.jpg/1200px-The_Sounds_of_Earth_-_GPN-2000-001976.jpg)

![https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Sounds_of_Earth_Record_Cover_-_GPN-2000-001978.jpg/1200px-The_Sounds_of_Earth_Record_Cover_-_GPN-2000-001978.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Sounds_of_Earth_Record_Cover_-_GPN-2000-001978.jpg/1200px-The_Sounds_of_Earth_Record_Cover_-_GPN-2000-001978.jpg)

![https://upload.wikimedia.org/wikipedia/commons/d/d2/Voyager.jpg](https://upload.wikimedia.org/wikipedia/commons/d/d2/Voyager.jpg)

### Others working with/on/by archiving

- Tacita Dean
- Mark Dion and Renée Green
- Stan Douglas
- Sam Durant
- Douglas Gordon
- Liam Gillick
- Gerard Richter

---

## Program

| Week 3 – 7 | (5 weeks) | **INPUT** |
| Week 8 | (1 week) | Spring Break | 
| Week 9 – 16 | (8 weeks) | **SEMESTER ASSIGNMENT DEVELOPMENT** |
| Week 17 | (1 week) | May Break |
| Week 18 – 21 | (4 weeks) | **OUTCOMES: EXECUTION & PRODUCTION** |
| Week 22 | (1 week) | Individual Feedback |
| Week 23 | (1 week) | Collectives 3A & 3B |