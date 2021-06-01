const Motorhome = require('../model/Motorhome');

// Show list of motorhomes
const readMotorhomes = (req, res, next) => {
    Motorhome.find().
    then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
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
    .catch(error => {
        res.json({
            message: "Error Occured !"
        })
    })
};

// Create new motorhome
let createMotorhome = (req, res, next) => {
    let motorhome = new Motorhome({
        brand : req.body.brand,
        model : req.body.model,
        type : req.body.type,
        gasType : req.body.gasType,
        numberOfSeats : req.body.numberOfSeats,
        odometer : req.body.odometer,
        yearOfManufacture : req.body.yearOfManufacture,
        condition : req.body.condition,
        additionalInfo: req.body.additionalInfo
    });
    motorhome.save()
    .then(response => {
        res.json({
            message: "Employee Added !"
        })
    })
    .catch(error => {
        res.json({
            message: "Error Occured !"
        })
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
const deleteMotorhome = (req, res, next) => {
    let motorhomeID = req.body.motorhomeID;
    Motorhome.findByIdAndRemove(motorhomeID)
    .then(() => {
        res.json({
            message: "Motorhome Deleted with ID: " + motorhomeID
        })
    })
    .catch(() => {
        res.json({
            message
        })
    })
    .catch(
        res.json({
            message: "Error occured"
        })
    )
}

module.exports = {
    readMotorhomes, searchMotorhomeByBrand, 
    createMotorhome, updateMotorhome, deleteMotorhome
}