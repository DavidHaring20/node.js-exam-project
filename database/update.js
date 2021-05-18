const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';
const dbName = 'nordicMotorhomeRentalDb';

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw new Error(error);
    }

    try {
        const db = client.db(dbName);
        const motorhomes = db.collection('motorhomes');

        motorhomes.updateOne(
            {"_id": ObjectId("60a3ae674f36f25038dc6203")},
            { $set: {
                "brand": 'b',
                "model": 'b',
                "type": 'b',
                "gasType": 'b',
                "numberOfSeats": 'b',
                "odometer": 0,
                "yearOfManufacture": 'b',
                "condition": 'b',
                "additionalInfo": 'b'
                }   
            }, (error) => {
                if (error) {
                    throw new Error(error);
                }

                client.close();
            }
        );

        console.log("Updated.");
        client.close()
    } catch(error) {
        console.log(error);
    }
});