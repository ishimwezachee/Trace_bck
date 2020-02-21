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
    quantity:{
        type:Number
    },
    minimum:{
        type:Number
    },
    maximum:{
        type:Number
    },
    payment_option:{
        type:[String]
    },
    sales_chanel:{
        type:[String]
    },
    amount:{
        type:Number
    },
    userId:{
        type:String
    }

});

const Ticket = mongoose.model("Ticket",ticketSchema);
module.exports = Ticket