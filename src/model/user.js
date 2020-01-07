const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    telephone:{
        type:String
    }
});

const User = mongoose.model("User",userSchema);

module.exports = User;
