# README

## Setup

This is a standard Rails application using postgresql as the database.

For setting up postgresql, either use homebrew or docker.

To install dependencies and set up the database (assuming you have postgres running)
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
- postgresql
- webpacker
- react-rails
- pg_search

The architural choices were made primary for operational simplicity
and ease of development. For example, not needing to run client and
server as separate apps.

From a high level, there's a "customers" controller that bootstraps
a React application with data sourced from the URL. Once the app
loads it immediately fetches data from a couple of API controllers
(one for the list of customers, one for the list of companies).

From that point forward, UI interactions are handled by the JS client.

For the client architecture, I've used the React Context API to
provide data and functionality to the UI components. There's an API layer,
a controller layer (via useSearch hook) and view components.

For the first/last name search functionality I've used a postgres tsvector
column to store the indexed search terms. This can perform searches faster 
than ILIKE, and better support partial matches.
