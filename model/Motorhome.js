const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const motorhomeSchema = new Schema({
    brand: {
        type: String
    },
    model: {
        type: String
    },
    type: {
        type: String
    },
    gasType: {
        type: String
    },
    numberOfSeats: {
        type: String
    },
    odometer: {
        type: Number
    },
    yearOfManufacture: {
        type: String
    },
    condition: {
        type: String
    },
    additionalInfo: {
        type: String
    },
    code: {
        type: String
    },
    status: {
        type: String
    }
}, { timestamps: true })

const Motorhome = mongoose.model('Motorhome', motorhomeSchema);
module.exports = Motorhome;
