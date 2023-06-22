<div align="center">
    <img src="https://github.com/jeffsLM/fox-processor-api/raw/master/src/assets/logo-fox-anima.png" alt="Fox Anima Logo">
</div>

<h1 align="center">Fox Anima - Fox Processor API</h1>
<p align="center">Universal Metadata Indexer For Anime In High Quality</p>

<div  align="center">

![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Badge](https://img.shields.io/badge/TYPEORM-orange?style=for-the-badge)

</div>
<div  align="center">

![Badge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

</div>

<!-- LEGALITY-WARNING:START - Do not remove or modify this section -->

> :warning:DISCLAIMER: This project was created with educational objectives, which takes advantage of the lack of security of information passed between sites and from this can generate a unique and distributed indexing for TVS. Use of the project by third parties is neither recommended nor supported by repository owner.

<!-- LEGALITY-WARNING:END -->

<h2>FPA - Fox Processor API</h2>
<p>FPA is a solution that centralizes, indexes and processes information about anime from different sources in order to provide episodes, images, summaries and all scalable information for viewing an anime without being tied to a single source.</p>

<h2>Architectural Pattern</h2>
<p>To create the FPA the link diagram below was used, it is possible to know how the project was structured as well as the use case that each route or helper would use:</p>
<p>Access in: <a href="https://whimsical.com/fox-anima-WEG53NZJCRLKqhCzW72Vvg@3CRerdhrAw8btSgM5wJ46k28">https://whimsical.com/fox-anima-WEG53NZJCRLKqhCzW72Vvg@3CRerdhrAw8btSgM5wJ46k28</a></p>

<h2>Define PORT aplication</h2>

by defalt, the port is 3333 but you can change it in the .env put PORT value

```
  //.env-file
  PORT=3333
```

<h2>Install and run FPA</h2>

```bash
 yarn install
 docker compose up
```

after running the command, you can run the migrations and popoulate the database with tables, with the command:

```bash
 yarn typeorm migrations:run
```

<h2>Project Pattern</h2>
FPA project is organized so that there are 5 encapsulators, namely:

&nbsp;&nbsp;

> :warning:DISCLAIMER: Due to the nature of the project being for educational purposes and because it takes advantage of flaws in third-party APIs. I cannot explain how failures happen, nor how their consumption can be carried out

<ul>
  <li>
    <code>/history</code> - The history of user
  </li>
  <li>
    <code>/fox</code> - Responsible for enabling queries of titles, episodes and more
  </li>
  <li>
    <code>/queue</code> - Queue controller, allows you to add one or more items
 in batch for processing
  </li>
  <li>
    <code>/populate</code> - Processes queue data with or without adding new titles
  </li>
</ul>

<h2>Related Projects</h2>
<p>I also created an application that consumes FPA data and enables streaming on TVOS, check it out at: <a href="https://github.com/jeffsLM/fox-processor-api">Fox Anima</a></p>

<h2>Contributing</h2>
<p>Feel like contributing? Fantastic! but at the moment this project is on pause, but feel free to open a PR</p>

<h2>License</h2>
<p>MIT © <a href="https://github.com/jeffsLM">jeffsLM</a></p>
