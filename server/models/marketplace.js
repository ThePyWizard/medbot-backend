import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MarketPlaceSchema = new Schema({
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
    role: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const MarketPlace = mongoose.model('Marketplace', MarketPlaceSchema);

export default MarketPlace;