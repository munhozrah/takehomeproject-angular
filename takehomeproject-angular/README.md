# TakehomeprojectAngular

Takehome project for Rafael applying for full-stack engineer. It'S the angular front-end consuming a REST API

## Requirements

For building and running the application you need:

- [Angualar 15+](https://angular.io/guide/setup-local)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Architecture
This application uses a simple approach with components and services as the main parts. The current user is shared using the UserService.
When maintaining consider:
* Use resolvers to load data outside the component
* Use guards to make validations before loading routes

## Still Pending
* Add logoff feature
* Modularize application and consider enable lazy loading
* Add environment file and scripts for starting in package.json
* segregate the application in different layers (maybe apply repository pattern)
* Add unit tests
* Add e2e tests
