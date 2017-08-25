# AngularExtended

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Planning
1. Component Architecture
* Root Component
  * Navbar
  * Footer - Admin Route
  * List Component
    * List All Teams (Each Team should routerLink to Team-Detail)

  * About Component
    * Explain what this site is for
  * Team-Detail Component
    * List Details about the selected team

  * Admin Component
    * List Component -- modified with this.router.url to include add/edit/delete teams

2. Specifications
* A user can view a list of all team members
* A user can click a team member's entry to visit their profile page
* A profile page will include more details about the team member
* A user can visit an 'About' page that explains what this is all about.
* A user can rest assured all data is persisted in a database.
* An administrator can add new team members
* An administrator can edit existing team members
* An administrator can delete existing team members

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
