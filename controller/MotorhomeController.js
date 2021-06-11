const Motorhome         = require('../model/Motorhome');
const LocalStorage      = require('node-localstorage').LocalStorage;
const localStorage      = new LocalStorage('./localstorage');

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
let createMotorhome = (brand, model, type, gasType, numberOfSeats, odometer, yearOfManufacture, condition, additionalInfo, code, status, req, res, next) => {
    let motorhome = new Motorhome({
        brand : brand,
        model : model,
        type : type,
        gasType : gasType,
        numberOfSeats : numberOfSeats,
        odometer : odometer,
        yearOfManufacture : yearOfManufacture,
        condition : condition,
        additionalInfo: additionalInfo,
        code: code,
        status: status
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
const updateMotorhome = (motorhomeID, brand, model, type, gasType, numberOfSeats, odometer, yearOfManufacture, condition, additionalInfo, code, status, res, next) => {
    let id = motorhomeID;

    let updatedData = {
        brand : brand,
        model : model,
        type : type,
        gasType : gasType,
        numberOfSeats : numberOfSeats,
        odometer : odometer,
        yearOfManufacture : yearOfManufacture,
        condition : condition,
        additionalInfo: additionalInfo,
        code: code,
        status: status
    }

    Motorhome.findByIdAndUpdate(id, {$set: updatedData}, {useFindAndModify: false})
    .then(() => {
        console.log("Motorhome updated succesfully.");
    })
    .catch(error => {
        console.log(error);
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