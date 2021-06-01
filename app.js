// Imports/requirements
const { urlencoded }    = require('express');
const bcrypt            = require('bcrypt');
const express           = require('express');
const app               = express();
const mongoose          = require('mongoose');
const bodyparser        = require('body-parser');

// Connection to database for development
mongoose.connect('mongodb://localhost:27017/nordicMotorhomeRentalDb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection; 

db.on('error', (error) => {
    console.log(error);
})

db.once('open', () => {
    console.log("Connection to database is successfull.");
})   

// App use methods
app.use(express.static("public"));
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

// Routers 
const motorhomeRouter = require('./routes/motorhomeRoutes.js');
const MotorhomeController = require('./controller/MotorhomeController.js');

// App use exported modules
app.use('/api/motorhome', motorhomeRouter.router);

// Get HTTP requests
app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/logIn/logIn.html");
});

app.get('/motorhomes', (req, res) => {
    res.sendFile(__dirname + "/public/motorhomes/motorhomes.html");
});

app.get('/homepage', (req, res) => {
    res.sendFile(__dirname + "/public/homePage/homePage.html");
})

app.get('/createnewmotorhome', (req, res) => {
    res.sendFile(__dirname + '/public/createnewmotorhome/createnewmotorhome.html');
});

console.log(__dirname);
// Post HTTP requests
app.post('/homePage', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username + " " + password);

    res.redirect('/homepage');
});

app.post('/createnewmotorhome', (req, res) => {
    console.log(req.body);
    MotorhomeController.createMotorhome(
        req.body.brand,
        req.body.model,
        req.body.type,
        req.body.gasType,
        req.body.numberOfSeats,
        req.body.odometer,
        req.body.yearOfManufacture,
        req.body.condition,
        req.body.additionalInfo
    );
    res.redirect('/motorhomes');
});

// Method for starting the server
app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("App is running on port: " + 8080 + ". \nApp URL is: localhost:8080/");
});