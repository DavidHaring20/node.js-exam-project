const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const url = "mongodb://localhost:27017";
const dbName = "nordicMotorhomeRentalDb";

MongoClient.connect(url, { useUnifiedTopology: true}, (error, client) => {
    if (error) {
        throw new Error(error);
    }

    try {
        const db = client.db(dbName);
        const motorhomes = db.collection('motorhomes');

        motorhomes.updateOne(
            {_id: ObjectId('60a3ae674f36f25038dc6203')},
            { $set: {
                brand: 'HYMER',
                model: 'Exsis-i',
                type: 'Camper Van',
                gasType: 'Diesel',
                numberOfSeats: '10',
                odometer: 198590,
                yearOfManufacture: '2017',
                condition: 'Very Good',
                additionalInfo: 'Whether for electric bikes, BBQ equipment or garden furniture – the HYMER Exsis-i demonstrates our many years of experience in the field of lightweight construction – so there’s nothing you’ll have to do without, even on your travels. Even when almost fully kitted out with two people on board, a full fresh water tank and two full gas bottles, there are still payload reserves of up to 600 kilograms depending on the layout. An all-time best in the 3.5-ton category! Today, speed restrictions, overtaking bans for HGVs, higher toll charges abroad, and the ability to be used by multiple generations are important factors when deciding which class of motorhome to buy. This is where the lightness of the Exsis range is a big advantage. The exterior and interior of the Exsis also boast a unique design, ingenious features and an exceptionally homely and cosy atmosphere. The vehicle’s aerodynamic design ensures low fuel consumption, quiet driving and a perfect view. The modern bodywork technology endows the Exsis with excellent insulation values, stability and durability. Climb aboard, enjoy and away you go.'
                } 
            }, () => {
                client.close();
            }
        );
    } catch (error) {
        console.log(error);
    }
});