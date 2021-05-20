// Imports/requirements
const { urlencoded } = require('express');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const fs = require('fs');

// App use methods
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers 
const motorhomeRouter = require('./routes/motorhomeRoutes.js');

// App use exported modules
app.use(motorhomeRouter.router);

// Get HTTP requests
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/logIn/logIn.html");
});

app.get('/motorhomes', (req, res) => {
    res.sendFile(__dirname + "/public/motorhomes/motorhomes.html");
});

app.get('/customers', (req, res) => {
    res.sendFile(__dirname + "/public/customers/customers.html");
});

app.get('/rentalContracts', (req, res) => {
    res.sendFile(__dirname + "/public/rentalContracts/rentalContracts.html");
});


// Post HTTP requests
app.post('/logIn', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username + " " + password);

    res.sendFile(__dirname + "/public/homePage/homePage.html");
});

// Method for starting the server
app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("App is running on port: " + 8080 + ". \nApp URL is: localhost:8080/");
});