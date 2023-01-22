const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type : String,
        require:true
    },
    price: {
        type : String,
        require:[true , "price must be provided"],
    },
    rating: {
        type : Number,
        default: false
    },
    postdate: {
        type : Date,
        default:Date.now(),
    },
    company: {
        type : String,
        require :true
    },
});

module.exports = mongoose.model('Product', productSchema);

