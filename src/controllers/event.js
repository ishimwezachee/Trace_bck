const Event = require("../model/event");

//============================================ create 
exports.creat_event = async (req,res,next)=>{
let event = new Event({
    title:req.body.title,
    description:req.body.description,
    start_date:req.body.start_date,
    end_date:req.body.end_date,
    venue:req.body.venue,
    ticket:req.body.ticket,
});
  event = await event.save();
  res.status(201).json(event)
}
//=========================================== get(all events);
exports.get_events = async (req,res,next)=>{
const events = await Event.find().sort({date:-1}).populate("ticket");
res.status(200).json(events);
}
//=========================================== get(one event);
exports.get_event = async (req,res,next)=>{
  const _id = req.params.id;
  const event = await Event.findById(_id);
  res.status(200).json(event);
}
//=========================================== update event
exports.modify_event = async (req,res,next)=>{
  let body = {}
  if(req.body.title){
    body.title = req.body.title
  }
  if(req.body.description){
    body.description = req.body.description
  }
  if(req.body.start_date){
    body.start_date = req.body.start_date
  }
  if(req.body.end_date){
    body.end_date = req.body.end_date
  }
  if(req.body.venue){
    body.venue = req.body.venue
  }
 const _id = req.params.id;
 const event = await Event.findOneAndUpdate({ _id }, body);
 res.status(200).json(event)
}
//=========================================== delete event
exports.delete_event = async (req,res,next)=>{
  const _id = req.params.id;
  const event = await Event.deleteOne({_id});
  res.status(200).json(event)
}

