const mongoose = require("mongoose");


mongoose.set('strictQuery', false);
const connectdb = (uri)=>{
    console.log("connected");
    return mongoose.connect(uri , {
        useNewUrlParser :true,
        useUnifiedTopology: true,
    });
};

module.exports = connectdb;