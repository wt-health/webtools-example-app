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

1. `docker run --rm --interactive --tty \
   --volume $PWD:/app \
   --user $(id -u):$(id -g) \
   composer install` to install the dependencies
2. `vendor/bin/sail artisan key:generate` to generate the application key
3. `vendor/bin/sail up` to start up the application (NOTE: This could take a while to build the first time)
4. `/vendor/bin/sail npm install` to install npm dependencies
5. `/vendor/bin/sail npm run dev` to run the React build process
6. `/vendor/bin/sail artisan migrate --seed` to run the React build process
7. Login to the application at `http://localhost/login` using the email and password in the DatabaseSeeder.php

### Task

Please extend the application to allow a user to do the following

- Search for by name
- Add pagination to the table to allow a user to navigate through the pages

## Useful Links

- [FHIR API docs](https://hapi.fhir.org/baseR4/swagger-ui/?page=Patient#/Patient/get_Patient)
- [Laravel Sail](https://laravel.com/docs/9.x/sail) 
