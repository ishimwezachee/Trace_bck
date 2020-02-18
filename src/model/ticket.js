const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticket_name:{
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
    number_of_ticket:{
        type:Number
    },
    amount:{
        type:Number
    }

});

const Ticket = mongoose.model("Ticket",ticketSchema);
module.exports = Ticket