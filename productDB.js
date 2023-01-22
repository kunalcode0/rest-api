const connectdb = require("./db/connect");
require("dotenv").config();
const Productjson = require("./products.json");
const Product = require("./models/product");
const start = async () => {
    try {
        await connectdb(process.env.MONGODB_URI);
        await Product.deleteMany();
        await Product.create(Productjson);
        console.log("sucess");
    } catch (error) {
        console.log(error);
    }
};

start();