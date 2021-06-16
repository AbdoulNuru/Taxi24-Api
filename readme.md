# Taxi24

[![Build Status](https://travis-ci.org/AbdoulNuru/Taxi24-Api.svg?branch=develop)](https://travis-ci.org/AbdoulNuru/Taxi24-Api) [![Maintainability](https://api.codeclimate.com/v1/badges/05278fe7eab91c23c9be/maintainability)](https://codeclimate.com/github/AbdoulNuru/Taxi24-Api/maintainability) [![Coverage Status](https://coveralls.io/repos/github/AbdoulNuru/Taxi24-Api/badge.svg?branch=develop)](https://coveralls.io/github/AbdoulNuru/Taxi24-Api?branch=develop)

## Description

This service incorporates APIs that are used to manage Taxi24 fleet of drivers
and allocate drivers to passengers.

## Prerequisites

- You must have node v12 or higher installed to run this service, you can download node from here [Node.js](https://nodejs.org/en/)
- You must have PostgreSQL database installed as it is the one used building this service.
- You must create a database in PostgreSQL and name it however you like.

## Cloning and running the service

- Clone the project in your local environment, you can run the command below to accomplish that.

```
> git clone https://github.com/AbdoulNuru/Taxi24-Api
```

- Switch to the project directory in your terminal and run the command below to download all the project dependencies

```
> yarn install
```

- Inside the project directory create a new file and name it .env, this is the file that contains the project's environment variables. Please refer to the file named
  .env.example inside the project to know what variables you have to provide.

- Now you can be able to start the service by running the command below in your project's terminal

```
> yarn run dev
```

## Database migration & seeding

- In order to create the tables used in this service in the Database you had created earlier, you have to run the migration command below.

```
> yarn run migrate:database
```

- In order to seed test data into your tables, you have to run the command below.

```
> yarn run seed:database
```

## Testing the service functionalities

- To test the endpoints of this api you can use a tool like postman to see how the api works. Below is a list of all endpoints and their urls that can be used to test.
  | Request Routes | Methods | Description |
  | -------------- | ------- | ----------- |
  | /get-drivers | GET | Get a list of all drivers |
  | /get-available-drivers | GET | Get a list of all available drivers |
  | /get-near-drivers | GET | Get a list of all available drivers within 3km for a
  specific location |
  | /get-drivers/:id | GET | Get a specific driver by ID |
  | /get-riders | GET | Get a list of all riders |
  | /get-riders/:id | GET | Get a specific rider by ID |
  | /get-nearest-drivers | GET | For a specific driver, get a list of the 3 closest drivers|
  | /trip | POST | Create a new ‘Trip’ request by assigning a driver to a rider |
  | /trip-complete | POST | Complete a trip |
  | /get-active-trips | GET | Get a list of all active Trips |

  ## Running the API tests

  - To run the tests, run the command below in your project terminal. After the tests complete running, in your terminal you shall see a table reporting the tests coverage.

  ```
  > yarn run test
  ```

```

---

**NOTE**

On all aforementioned commands, you can use npm in a place of yarn and the command will work in the same way

---
```
