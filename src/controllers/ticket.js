const Ticket = require("../model/ticket");

//============================================ create 
exports.create_ticket = async (req,res,next)=>{
let ticket = new Ticket({
    ticket_name:req.body.ticket,
    description:req.body.description,
    start_sale:req.body.start_sale,
    end_sale:req.body.end_sale,
    quantity:req.body.quantity,
    amount:req.body.amount,
    payment_mode:req.body.payment_mode
});
  ticket = await ticket.save();
  res.status(201).json(ticket);
}
//=========================================== get(all tickets);
exports.get_tickets = async (req,res,next)=>{
  const tickets = await Ticket.find();
  res.status(200).json(tickets)
}
//=========================================== get(one tickets);
exports.get_ticket = async (req,res,next)=>{
  const _id = req.params.id;
  const ticket = await Ticket.findById(_id);
  res.status(200).json(ticket)
}
//=========================================== update ticket
exports.modify_ticket = async (req,res,next)=>{
  let body = {}
  if(req.body.ticket_name){
    body.ticket_name = req.body.ticket_name
  }
  if(req.body.description){
    body.description = req.body.description
  }
  if(req.body.end_sale){
    body.end_sale = req.body.end_sale
  }
  if(req.body.start_sale){
    body.start_sale = req.body.start_sale
  }
  if(req.body.quantity){
    body.quantity = req.body.quantity
  }
  if(req.body.amount){
    body.amount = req.body.amount
  }
  if(req.body.payment_mode){
    body.payment_mode = req.body.payment_mode
  }
  const _id = req.params.id;
  const ticket = await Ticket.findOneAndUpdate({ _id}, body);
  res.status(200).json(ticket)
}
//=========================================== delete ticket
exports.delete_ticket = async (req,res,next)=>{
  const _id = req.body.id;
  const ticket = await Ticket.deleteOne({_id});
  res.status(200).json(ticket)
}
