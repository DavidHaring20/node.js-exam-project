// Imports/requirements
const { urlencoded }    = require('express');
// const bcrypt            = require('bcrypt');
// const saltRounds         = 12;
// const myPass            = "v3ryH4rDP4$$w0rd";
const express           = require('express');
const app               = express();
const mongoose          = require('mongoose');
const LocalStorage      = require('node-localstorage').LocalStorage;
const localStorage      = new LocalStorage('./localstorage');

// Connection to database for development
mongoose.connect('mongodb://localhost:27017/nordicMotorhomeRentalDb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection; 

db.on('error', (error) => {
    console.log(error);
});

db.once('open', () => {
    console.log("Connection to database is successfull.");
});

// // Hash password
// bcrypt.genSalt(saltRounds, (err, salt) =>{
//     bcrypt.hash(myPass, salt, (err, hash) => {
//         localStorage.setItem('username', "David Haring");
//         localStorage.setItem('password', hash);
//     });
// });

// App use methods
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers 
const motorhomeRouter = require('./routes/motorhomeRoutes.js');
const MotorhomeController = require('./controller/MotorhomeController.js');

// App use exported modules
app.use('/api/motorhome', motorhomeRouter.router);

// Get HTTP requests
app.get('/', (req, res) => {
    res.redirect('/login');
});

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

app.get('/updatemotorhome', (req, res) => {
    res.sendFile(__dirname + '/public/updatemotorhome/updatemotorhome.html');
});

app.get('/updatemotorhome/:id', (req, res) => {
    localStorage.setItem('updateId', req.params.id);

    res.redirect('/updatemotorhome');
});

// Post HTTP requests
// Log in post method
app.post('/homePage', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username + " " + password);

    res.redirect('/homepage');
});

// Creating new Motorhome
app.post('/createnewmotorhome', (req, res) => {
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

// Deleting the Motorhome
app.post('/deletemotorhome/:id', (req, res) => {
    let motorhomeID = req.params.id;
    MotorhomeController.deleteMotorhome(motorhomeID);

    res.redirect('/motorhomes');
});

// Updating the Motorhome
app.post('/updatemotorhome', (req, res) => {
    let id = localStorage.getItem('updateId');
    let brand = req.body.brand;
    let model = req.body.model;
    let type = req.body.type;
    let gasType = req.body.gasType;
    let numberOfSeats = req.body.numberOfSeats;
    let odometer = req.body.odometer;
    let yearOfManufacture = req.body.yearOfManufacture;
    let condition = req.body.condition;
    let additionalInfo = req.body.additionalInfo;
    
    MotorhomeController.updateMotorhome(id, brand, model, type, gasType, numberOfSeats, odometer, yearOfManufacture, condition, additionalInfo);

    res.redirect('/motorhomes');
});

// Method for starting the server
app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("App is running on port: " + 8080 + ". \nApp URL is: localhost:8080/");
});