const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "nordicMotorhomeRentalDb";

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw new Error(error);
    }

    try {
        const db = client.db(dbName);
        const motorhomes = db.collection('motorhomes');

        motorhomes.find().toArray((error, data) => {
            if (error) {
                throw new Error(error); 
            }
            console.log(data);
            client.close();
        });
    } catch (error) {
        console.log(error);
    } 
});