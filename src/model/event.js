const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    start_date:{
        type:Date
    },
    end_date:{
        type:Date
    },
    venue:{
        type:String
    },
    userId:{
        type:String
    },
    eventImage:{
     type:String
    }
});

const Event = mongoose.model("Event",eventSchema);
module.exports = Event