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
            "brand" : "HYMER",
            "model" : "B-Class ModernComfort I",
            "type" : "elegant, sporty",
            "gasType" : "fuel",
            "numberOfSeats" : "8",
            "odometer" : 124050,
            "yearOfManufacture" : "2018",
            "condition" : "Excellent",
            "additionalInfo" : "The HYMER B-Class ModernComfort is the perfect outcome from the successful partnership between Mercedes-Benz and HYMER. The vehicles of the ModernComfort series are the first motorhomes in which a specially developed chassis cowl from the new Mercedes Benz Sprinter is merged with a chassis made by a motorhome manufacturer. Thanks to a combination of the award-winning HYMER SLC chassis, the renowned PUAL technology and the GRP lightweight floor, this new generation of motorhomes combines an especially light and stable body with improved safety and driving comfort." 
        }, (error, result) => {
            if (error) {
                throw new Error(error);
            } 

            console.log("Inserted count: " + result.insertedCount);

            client.close();
        });
});