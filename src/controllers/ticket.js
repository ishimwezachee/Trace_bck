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
