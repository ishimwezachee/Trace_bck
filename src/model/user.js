const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

const User = mongoose.model("User",userSchema);
module.exports = User;
