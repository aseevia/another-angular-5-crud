# Another CRUD example in [Node.js](https://nodejs.org/)/[MongoDB](https://www.mongodb.com/)/[Angular 5](https://angular.io)

To be used for educational and demonstrational purposes. 
Represents another implementation of the **C**reate, **R**ead, **U**pdate, and **D**elete operations. 
Application renders a list of customers, allows to add new customer, edit and/or delete existing ones.
We first build a separate [Node.js](https://nodejs.org/) server (with [MongoDB](https://www.mongodb.com/) database) to serve API, and then consume it from an Angular 5 Application. I ended up combining them together to be hosted on [Heroku](https://heroku.com), but you can definitely use them as separate back-end and front-end parts, and even host them on two different servers/domains.  

Project has some cool features: 

* Uses [Bootstrap 4](https://getbootstrap.com) for responsive html/css layout, which works decently on mobile (phone, tablet) as well as desktop browsers.
* Imports Bootstrap SASS/SCSS files, so potentially you can import only the modules you actually use. 
* Contains example of Angular Reactive Forms usage.
* Demonstrates interaction with [MongoDB](https://www.mongodb.com/) database.
* Contains `concurrently` start scripts for running back-end and front-end part parts as a single process for development convenience.
* Ready for deployment to Heroku!
* Includes working sample karma/jasmine tests for all components.
* Has thoroughly commented code.
* Written in Typescript.

It still has a lot you can try to add yourself:
* Pop-up notifications.
* Pagination for the Customer list.
* Filtering and sorting.
* Any other fun features you can think of.
So get creative, go for it :)!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli), uses Angular version 5.2.

## Development server

Project contains complex script structure since it's being developed as 2 separate projects: `server.js` to serve API for the app,
and the angular app itself in `/src/app` for which we want to be able to use an Angular-CLI dev server running `ng serve`.
So here are your options: 

Run `npm run serve-api` to start `server.js` which serves API for the `/customers` route, and also serves the `/public/index.html` file for any GET request that comes in for any other route `/*`. This allows Angular to handle the routing instead of the `server.js`. 

Run `npm run start-dev` to build the app into the `/public` folder, and then (re)start `npm run serve-api` and `ng serve` via concurrently.
Note that changes to the web app (src/app) folder will be hot reloaded automatically, while changes to the `server.js` demand another `npm run start-dev`.
In order to make this possible, you need to install concurrently `npm install concurrently -g` and make changes to `proxy.conf.json` if required.

Run `ng serve` for an angular app dev server. Navigate to `http://localhost:4200/` or use the `-o` flag to instantly open in browser. 
The app will automatically reload if you change any of the source files.

## Build

Run `npm build` which actually runs `ng build --output-path=public`, builds the project into the `/public` folder, 
instead of the default `/dist` which gets removed with every `ng serve`. Use the `-prod` flag for a production build.

## Deploy

The project is ready to be deployed to heroku, it has all the `package.json` tuning for it, including the `postinstall` script which builds the app to the `/public` folder with the `-prod` flag after the upload to heroku server. Just run `npm run deploy` or `git push heroku master`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Only a few basic tests included (but they actually work :).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
A single basic test (but it actually works too :).