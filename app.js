// Imports/requirements
let mongoDbUrl          = "mongodb://new-user:veryhardpassword@dh-cluster-nmr-shard-00-00.n435h.mongodb.net:27017,dh-cluster-nmr-shard-00-01.n435h.mongodb.net:27017,dh-cluster-nmr-shard-00-02.n435h.mongodb.net:27017/nordicMotorhomeRental?ssl=true&replicaSet=atlas-hniznx-shard-0&authSource=admin&retryWrites=true&w=majority";
const { urlencoded }    = require('express');
const bcrypt            = require('bcrypt');
const saltRounds        = 12;
const express           = require('express');
const app               = express();
const mongoose          = require('mongoose');
const LocalStorage      = require('node-localstorage').LocalStorage;
const localStorage      = new LocalStorage('./localstorage');
const server            = require('http').createServer(app);
const io                = require('socket.io')(server);

io.on("connection", socket => {
    console.log("Connected socket with id: " + socket.id);

    socket.on("disconnect", (socket) => {
        console.log("Socket disconnected.");
    })
});

// Connection to database for development
mongoose.connect(mongoDbUrl, {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection; 

db.on('error', (error) => {
    console.log(error);
});

db.once('open', () => {
    console.log("Connection to database is successfull.");
});

// App use methods
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router 
const motorhomeRouter = require('./routes/motorhomeRoutes.js');

// Controller
const MotorhomeController = require('./controller/MotorhomeController.js');

// App use exported modules
app.use('/api/motorhome', motorhomeRouter.router);

// Get HTTP requests
app.get('/node_modules/socket.io/client-dist/socket.io.js', (req, res) => {
    res.sendFile(__dirname + '/node_modules/socket.io/client-dist/socket.io.js');
});

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
    const usernameCheck = localStorage.getItem('username');
    const password = req.body.password;
    const passwordCheck = localStorage.getItem('password');

    bcrypt.compare(password, passwordCheck, (err, result) => {
        if (result === true && username === usernameCheck) {
            res.redirect('/homepage');
        } else 
        res.redirect('/login');
    });
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
        req.body.additionalInfo,
        req.body.code, 
        req.body.status
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
    let code = req.body.code;
    let status = req.body.status;
    
    MotorhomeController.updateMotorhome(id, brand, model, type, gasType, numberOfSeats, odometer, yearOfManufacture, condition, additionalInfo, code, status);

    res.redirect('/motorhomes');
});

// Method for starting the server
server.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port: " + 8080 + ". \nServer URL is: localhost:8080/");
});