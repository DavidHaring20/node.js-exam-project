const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';
const dbName = 'nordicMotorhomeRentalDb';

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw new Error(error);
    };

    const db = client.db(dbName);
    const motorhomes = db.collection("motorhomes");

    motorhomes.deleteOne( {"_id" : ObjectId("60a3940cc3a7a007d0f21125")}, (error) => {
        if (error) {
            throw new Error(error);
        }

        console.log("Motorhome deleted.");

        client.close();
    });
});