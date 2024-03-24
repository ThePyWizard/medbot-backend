import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BloodBankSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const BloodBank = mongoose.model('BloodBank', BloodBankSchema);

export default BloodBank;
