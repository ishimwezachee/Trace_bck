const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ticket_paymentSchema = new Schema({
    amount:{
        type:String
    },
    customer:{
        type:String
    },
    comment:{
        type:String
    },
    transactionId:ObjectId
});

const Ticket_payment = mongoose.model("Ticket_payment",ticket_paymentSchema);
module.exports = Ticket_payment