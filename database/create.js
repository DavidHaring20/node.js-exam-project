const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "nordicMotorhomeRentalDb";

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw new Error(error);
    }

    const db = client.db(dbName);
    const motorhomes = db.collection("motorhomes");

    motorhomes.insertOne(
        { 
            "brand" : "DUMMY",
            "model" : "DUMMY",
            "type" : "DUMMY",
            "gasType" : "DUMMY",
            "numberOfSeats" : "DUMMY",
            "odometer" : 0,
            "yearOfManufacture" : "DUMMY",
            "condition" : "DUMMY",
            "additionalInfo" : "DUMMY" 
        }, (error, result) => {
            if (error) {
                throw new Error(error);
            } 

            console.log("Inserted count: " + result.insertedCount);

            client.close();
        });
});