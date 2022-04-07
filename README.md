# Grafana Excercise 

## How to set up the repository

Clone this repository

```
https://github.com/gjavilonte/Grafana-clone.git
```

To run this project, install it locally using npm:

```
$ cd ../folder
$ npm install
$ npm start
```

To run the test files use the following command:

```
$ npm run test
```
Create .env file and copy paste "REACT_APP_FAKE_SERVER_URL='http://localhost:8000'"

## Libraries used

- react version: ^17.0.2
- react-router-dom version: ^5.3.0 - Added to handle Routing
- react-toastify version: ^8.1.0 - Added to handle error and success notification
- react-testing-library Using this library for UT
- uuidv4 version: ^6.2.12 - Added to generate random Ids for the Alarms
- axios version: ^0.24.0 - Added to handle Api request
- @mui/material version: ^5.0.6 - Component library
- msw version: ^0.35.0 - Added to mock response from request make by the client.
- Soon we'll be using D3 to visualize the Data
