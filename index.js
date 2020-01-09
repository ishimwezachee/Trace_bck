//================================================================ variables 
const express = require("express");
const app  = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const Routes = require("./src/routes/route");

//==================================================== middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(cors());

//==================================================== routes 

app.use("/welcome",(req,res)=>{
    res.status(200).send('welcome to the Trace app')
});
app.use("/api",Routes)
//=========================================================== connect mongdb;

mongoose.connect('mongodb://localhost:27017/Trace',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
    , function () {
        console.log("database connected success")
    });

 //============================================================ port 
const port = process.env.PORT || 4000;
app.listen(port,()=> console.log(`app is running on port ${port}`));