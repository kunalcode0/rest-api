const express = require("express");
const app = express();
const connectdb = require("./db/connect");
require("dotenv").config();
const product_route = require("./routes/product");

app.use("/api", product_route);

app.get( "/", (req , res)=>{
    res.send(" google");
})

const start = async ()=>{
    try {
        await connectdb(process.env.MONGODB_URI);
        app.listen(5000, () =>{
            console.log('I am connected')
        })
    } catch (error) {
        console.log(error);
    }
};
start(); 