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
    ticket:{
        type:Schema.Types.ObjectId,
        ref:"Ticket"
    },
    event_image:{
        type:Buffer,
        contentType:String
    }
    organizer:{
        type:Schema.Types.ObjectId,
        ref : "User"
    }
});

const Event = mongoose.model("Event",eventSchema);
module.exports = Event