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

module.exports = {
    router
};