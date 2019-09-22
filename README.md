# burger
A burger logger with [MySQL](https://www.mysql.com/), [Node](https://nodejs.org/), [Express](https://expressjs.com/), [Handlebars](https://www.npmjs.com/package/express-handlebars) and a homemade ORM!

## Objective
This is an app that allows clients to add the names of burgers they'd like to eat to a "waiting list" area, and then when devoured, each burger will move to the devoured section of the page. All burgers, devoured or not, will be stored in a MySQL database.

The app utilizes MVC design architecture, where [Node](https://nodejs.org/) and [MySQL](https://www.mysql.com/) are used to query and route data in the app, and [Handlebars](https://www.npmjs.com/package/express-handlebars) to generate your HTML.

The app is hosted on [heroku](https://www.heroku.com/), where anyone can access and test the app.

## Structure
Following the MVC design paradim, the app is structured in the following format
1. **M**odels folder:
  - **burger.js** - this file is used to access the ORM code to do CRUD operations on the database
2. **V**iews folder:
  - **main.handlebars** - this file is the entry HTML file, that uses the [Handlebars](https://www.npmjs.com/package/handlebars) templating language
  - **index.handlebars** - this file will contain the new burgers created, and devoured burgers, all dynamicall ygenerated utilizing the [Handlebars](https://www.npmjs.com/package/handlebars) templating language
3. **C**ontrollers folder:
  - **burgersController.js** - this file responds to a client's HTTP requests, and responds back with the appropriate view route
4. **config** folder:
  - **connection.js** - this file sets up the proper hooks into local MySQL DB, or JAWSDB (Heroku)
  - **orm.js** - an Object Relational Mapping file that communicates directly with the (local/JAWS) MySQL DB, and simplify the process of   CRUD operations on the DB
5. **public** folder:
  - this folder contains "static" css and images folders, as well as client-side javascript code (**burgers.js**)
  - **burgers.js** - this is the client-side code that intercepts client's events, and send the appropriate HTTP request (via AJAX) to the controller code (**burburgersController.js**)
6. **server.js** - entry point file. This program imports [express](https://www.npmjs.com/package/express) and fires up the HTTP server

## How to use locally (on your machine)
Clone, or download this repository
1. Navigate to where the `\burger` folder is
1. Install dependencies <br>
`$ npm install`
1. In Terminal, use node to start the server <br>
`$ node server.js`
1. You should see the following, indicating a successful server launch:
`App listening on PORT 3000`
1. In your favorite browser, navigate to `http://localhost:3000`

## Heroku Demo
[eat-da-burger](https://arcane-shore-74282.herokuapp.com/)

## Repository
[GitHub](https://github.com/az9000/burger)

## Technologies used
1. node JS
1. Express
1. Handlebars
1. JavaScript
1. jQuery
1. MySQL
1. ORM
1. HTML
1. CSS
1. Heroku

## Author
Fawzi Alami
