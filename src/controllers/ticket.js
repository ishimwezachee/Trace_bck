const Ticket = require("../model/ticket");

//============================================ create 
exports.create_ticket = async (req,res,next)=>{
  const {
    ticket_name,
    description,
    start_date,
    end_date,
    quantity,
    amount
  } = req.body

let ticket = new Ticket({
    ticket_name,
    description,
    start_date,
    end_date,
    quantity,
    amount
});
console.log(ticket);
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
  if(req.body.end_date){
    body.end_date = req.body.end_date
  }
  if(req.body.start_date){
    body.start_date = req.body.start_date
  }
  if(req.body.number_of_ticket){
    body.number_of_ticket = req.body.number_of_ticket
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
