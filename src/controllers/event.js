const Event = require("../model/event");
const Validation = require("../validations/validation")
const upload = require("../middleware/uploadImage")
const fs = require('fs');
//============================================ create 
exports.creat_event = async (req,res,next)=>{
  let image_url = req.files !== null ? await upload.imageUpload(req.files) : "https://images.io/123";
  console.log(image_url)
  const {title,description,start_date,end_date,venue} = req.body;
  const { userId } = req.userData;
  const validationObject = {
    title,
    description,
    start_date,
    end_date,
    venue
  }
  // VALIDATION 
  const {error} = Validation.onEventValidation(validationObject);
  if(error) return res.status(400).json({error:error.details[0].message})
let event = new Event(validationObject);
event.eventImage = image_url;
event.userId = userId;
event = await event.save();
console.log(event)
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
  const {title,description,start_date,end_date,venue} = req.body;
  let body = {}
  if(title) body.title = title;
  if(description)body.description = description;
  if(start_date) body.start_date = start_date;
  if(end_date) body.end_date = end_date;
  if(venue) body.venue = venue;
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

