# PeopleProject
CMD Terminal 1:

    cd PeopleServer
    npm install
    npm start

CMD Terminal 2:

    cd PeopleSearch
    npm install
    npm start

# peopleserver
Simple People server

This node server has a `people.csv` file of 100000 "people" which is read into memory and can be searched at:

     /people/:prefix
     
and indivdual people can be queried via GET or updated via POST at

     /person/:id
     
There is no persistence to disk or database. Once the server is restarted all records are reset from the initial `people.csv`

Used as a sample backend for frontend training and development

# peoplesearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
