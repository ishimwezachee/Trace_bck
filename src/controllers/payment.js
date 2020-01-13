const mongoose = require('mongoose');
const Ticket_payment = require("../model/payment");

//============================================ create 
exports.create_payment = async (req,res,next)=>{
    let payment = new Ticket_payment({
        amount:req.body.amount,
        customer:req.body.customer,
        transactionId:new mongoose.Types.ObjectId(),
        comment:req.body.comment
    });
    payment = await payment.save();
    res.status(201).json(payment)
};
//=========================================== get(all payment);
exports.get_payments = async (req,res,next)=>{
    const payments = await Ticket_payment.find();
    res.status(200).json(payments)
}
//=========================================== get(one payments);
exports.get_payment = async (req,res,next)=>{
    const _id = req.params.id;
    const payment = await Ticket_payment.findById(_id);
    res.status(200).json(payment)
}