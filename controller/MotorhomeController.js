const Motorhome = require('../model/Motorhome');
const LocalStorage      = require('node-localstorage').LocalStorage;
const localStorage      = new LocalStorage('./localstorage');

console.log(localStorage);

// Show list of motorhomes
const readMotorhomes = (req, res, next) => {
    Motorhome.find().
    then(response => {
        res.json({
            response
        })
    })
    .catch(() => {
        res.json({
            message: "Error Occured !"
        })
    })
};

// Search for specific motorhome by brand
const searchMotorhomeByBrand = (req, res, next) => {
    let motorhomeBrand = req.body.brand;
    Motorhome.find({ 'brand': motorhomeBrand})
    .then(response => {
        res.json({
            response
        }) 
    })
    .catch(() => {
        res.json({
            message: "Error Occured !"
        })
    })
};

// Search for a specific motorhome by ID
//const searchMotorhomeById = (motorhomeID, req, res, next) => {
const searchMotorhomeById = (req, res, next) => {
    let motorhomeID = localStorage.getItem('updateId');
    console.log("MotorhomeID: " + motorhomeID);
    Motorhome.findById(motorhomeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        console.log(error);
    })
}

// Create new motorhome
let createMotorhome = (brand, model, type, gasType, numberOfSeats, odometer, yearOfManufacture, condition, additionalInfo, req, res, next) => {
    let motorhome = new Motorhome({
        brand : brand,
        model : model,
        type : type,
        gasType : gasType,
        numberOfSeats : numberOfSeats,
        odometer : odometer,
        yearOfManufacture : yearOfManufacture,
        condition : condition,
        additionalInfo: additionalInfo
    });
    motorhome.save()
    .then(() => {
        console.log("Motorhome created succesfully.");
    })
    .catch(error => {
        console.log(error);
    });
};

// Update a motorhome
const updateMotorhome = (req, res, next) => {
    let motorhomeID = req.body.motorhomeID;

    let updatedData = {
        brand : req.body.brand,
        model : req.body.model,
        type : req.body.type,
        gasType : req.body.gasType,
        numberOfSeats : req.body.numberOfSeats,
        odometer : req.body.odometer,
        yearOfManufacture : req.body.yearOfManufacture,
        condition : req.body.condition,
        additionalInfo: req.body.additionalInfo
    }
    Motorhome.findByIdAndUpdate(motorhomeID, {$set: updatedData})
    .then(() => {
        res.json({
            message: "Updated Motorhome with ID: "+ motorhomeID
        })
    })
    .catch(() => {
        res.json({
            message: "Error Occured !"
        }) 
    })
};

// Delete a motorhome by ID
const deleteMotorhome = (motorhomeID, req, res, next) => {
    Motorhome.findByIdAndRemove(motorhomeID, {useFindAndModify: false})
    .then(() => {
        console.log("Motorhome delete succesfully with ID: " + motorhomeID);
    })
    .catch(error => {
        console.log(error);
    })
}

module.exports = {
    readMotorhomes, searchMotorhomeByBrand, searchMotorhomeById, 
    createMotorhome, updateMotorhome, deleteMotorhome
}