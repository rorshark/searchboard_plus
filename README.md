# README

## Setup

This is set up as a standard Rails application using postgresql as the database.
Here's a blog that generally covers the setup:

https://medium.com/@dyanagi/how-to-run-an-existing-ruby-on-rails-project-after-cloning-a-repository-8535e4f14bc9

To install dependencies and set up the database (assuming you have postgres running locally),
run the following command:

```
bin/setup
```

You can seed the database by running:

```
bin/rails db:seed
```

## Tests

There are both rspec specs and jest tests.

```
# for Rails tests
bin/rspec

# for Jest tests
bin/yarn test
```

## Running the app

```
bin/rails server
```

Visit `http://localhost:3000` in your browser.

## Architecture

This app uses the following:

- rails
- react-rails
- postgresql

These were made primary for operational simplicity and ease of 
development. For example, not needing to test/run client and server 
as separate apps.

From a high level, there's a "customers" controller that bootstraps
a React application. Once the app loads, it immediately fetches data 
from a couple of API controllers (one for the list of customers, one 
for the list of companies).

For the client architecture, I've used the React Context API to
provide data and actions to the UI components.

For the first/last name search functionality, I've used a postgres tsvector
column to store the indexed search terms. This can perform searches faster 
than ILIKE, and better support partial matches.
