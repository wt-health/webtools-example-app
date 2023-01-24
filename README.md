# Webtools Example Application

## Background

This is a small laravel/inertia/react application that allows pulling of a list of patients from a public FHIR API.

This currently allows a page of patients to be shown to a user as well as clicking into an individual patient.

### Repo setup

1. Clone this repo
2. Create a new private repo and push to GitHub
3. Make changes as required below
4. Share with GitHub users `karl-d`, `Matt-Web` and `kibbonz`

### Getting it running

1. `docker-compose up` to start up the application
2. `docker-compose exec laravel.test composer install` to install composer dependencies
3. `/vendor/bin/sail npm install` to install npm dependencies
4. `/vendor/bin/sail npm run dev` to run the React build process


### Task

Please extend the application to allow a user to do the following

- Search for by name
- Add pagination to the table to allow a user to navigate through the pages

## Useful Links

- [FHIR API docs](https://hapi.fhir.org/baseR4/swagger-ui/?page=Patient#/Patient/get_Patient)
- [Laravel Sail](https://laravel.com/docs/9.x/sail) 
