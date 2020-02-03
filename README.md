# Star Jump

## Link to Deployed Application - [Star Jump](https://powerful-tundra-87228.herokuapp.com/)

## Installation and Getting Started

Using your <strong>CLI,</strong> (bash for Windows, terminal for Mac) clone the repository to your local machine 

```bash
$ git clone [repository]
```
From there, change your directory to the project and install the <strong>necessary dependencies.</strong> You also need to have the <a href="https://www.npmjs.com/package/nodemon">Nodemon</a> package to run the Express server concurrently with the react-app. Use the following commands on your CLI when at the main repository's folder.</h2>

```bash
$ npm install
$ npm install nodemon
```
Lastly, change directories into the <strong>CLIENT folder</strong> and install its respective dependencies using the same command on your CLI

```bash
$ npm install
```

After that is finished, change directories back to the main repository folder and <strong>run the command</strong> to launch the application

```bash
$ npm run dev
``` 
## Overview

Our landing page will start with a preloader welcoming users to the application. They will be able to see all of our current list of games as well as log on or register if they are a new user.

![landingPage](https://i.imgur.com/PbqoFUk.png)

  Earn Stars           |  Learn New Things |  Play Games  |  
:-------------------------:|:-------------------------: |:-------------------------: |
![stars](https://media.giphy.com/media/Idxq185yIzLl4Aubca/giphy.gif)  |  ![learnThings](https://media.giphy.com/media/idd7dpLZrK2V5P2aZH/giphy.gif)  |  ![ourGames](https://media.giphy.com/media/fYMh7ELqoll0mPfycN/giphy.gif)  |

## Technologies Used

React.js           |  Node.js |  MongoDB  |  JSON Web Token
:-------------------------:|:-------------------------: |:-------------------------: |:-------------------------:
![react](https://cdn.auth0.com/blog/react-js/react.png)  |  ![node](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png)  |  ![mongo](https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg)  |  ![json](https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/07/Screen-Shot-2018-10-11-at-1.40.06-PM.png?fit=1016%2C1034&ssl=1)

<ul style="font-size: 20px;">
<li><a href="https://reactjs.org/">React.js</a> was used to further enhance our front-end with component logic written in JavaScript to improve overall rendering performance. With creative views, we designed a simple, yet effective, interface to provide users with different games.</li>
<li><a href="https://getbootstrap.com/">Bootstrap</a> was used to create the front-end layout of our project, creating a responsive design for multiple resolutions</li>
<li><a href="https://expressjs.com/">Express.js</a> is a web framework that we used to build our server.</li>
<li><a href="https://nodejs.org/en/">Node.js</a> is the development environment we used to build our application.</li>
<li><a href="https://www.mongodb.com/">MongoDB</a> and Mongoose was used to store data about users and keep track of their stars.</li>
<li><a href="https://www.npmjs.com/package/jsonwebtoken">JSON Web Token</a> is the middleware used to handle our users sessions.</li>
<li><a href="https://www.npmjs.com/package/bcrypt">Bcrypt</a> is a Node package we used to handle hashing passwords before saving them in the database as well as for validating passwords when users log in.</li>
<li><a href="https://reactjs.org/docs/context.html">Context API</a> was used to create global variables which we used to share information across our file structure</li>
<li><a href="https://www.npmjs.com/package/sweetalert">Sweet Alert</a> was used as a simple and appealing way to alert users through modals of their success upon completing a game</li>
</ul>

## Project Creator and Maintainers

#### Phillip Laub 
<ul style="font-size: 20px;">
  <li><a href="https://github.com/PhillipLaub">Github</a></li>
  <li><a href="https://www.linkedin.com/in/phillip-laub-642925115/">Linkedin</a></li>
  <li><a href="https://philliplaub.github.io/Portfolio/portfolio.html">Portfolio</a></li>
</ul>

#### Michael Johnston
<ul style="font-size: 20px;">
  <li><a href="https://github.com/mjjohnston55">Github</a></li>
  <li><a href="https://www.linkedin.com/in/mike-johnston-48973b18a/">LinkeIin</a></li>
</ul>

#### Thomas Nelson
<ul style="font-size: 20px;">
  <li><a href="https://github.com/thnlsn">Github</a></li>
  <li><a href="https://www.linkedin.com/in/thnlsn/">LinkedIn</a></li>
  <li><a href="https://www.thnlsn.me/">Portfolio</a></li>
</ul>

#### Joseph Badua
<ul style="font-size: 20px;">
  <li><a href="https://github.com/JosephBadua">Github</a></li>
  <li><a href="https://www.linkedin.com/in/joseph-badua-60aaa7188/">LinkedIn</a></li>
  <li><a href="http://www.josephbadua.com/">Portfolio</a></li>
</ul>
