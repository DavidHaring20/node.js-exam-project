const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "nordicMotorhomeRentalDb";

let motorhomeArray = [];

router.get("/api/motorhomes", (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
        if (error) {
            throw new Error(error);
        }

        const db = client.db(dbName);
        const motorhomes = db.collection('motorhomes');

        try {
            (async function read() {
                motorhomes.find().toArray((error, data) => {
                    if (error) {
                        console.log(error);
                    }
                    
                    motorhomeArray = data;
                    client.close();
                });  
            })()          
        } catch (error) {
            console.log(error);
        } 
    });

    res.send({ motorhomeArray });
});

exports.create=(req, res) => {
    console.log("hit");
    MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
        if (error) {
            throw new Error(error);
        }
    
        const db = client.db(dbName);
        const motorhomes = db.collection("motorhomes");
    
        motorhomes.insertOne(
            { 
                "brand" : req.body.brand,
                "model" : req.body.model,
                "type" : req.body.type,
                "gasType" : req.body.gasType,
                "numberOfSeats" : req.body.numberOfSeats,
                "odometer" : req.body.odometer,
                "yearOfManufacture" : req.body.yearOfManufacture,
                "condition" : req.body.condition,
                "additionalInfo" : req.body.additionalInfo 
            }, (error, result) => {
                if (error) {
                    throw new Error(error);
                } 
    
                console.log("Inserted count: " + result.insertedCount);
    
                client.close();
            });
    });
}

module.exports = {
    router
};