const Event = require("../model/event");
const fs = require('fs');
//============================================ create 
exports.creat_event = async (req,res,next)=>{
  const {title,description,start_date,end_date,venue} = req.body;

let event = new Event({
    title,
    description,
    start_date,
    end_date,
    venue,
});
let images = [];
       images.push({
           data: fs.readFileSync(req.file.path),
           contentType: 'image/jpeg'
       });
event.eventImage = images[0]
console.log(event)
event = await event.save()
console.log(event)
  //remove files in uploads folder
  fs.unlink(req.file.path, (err) => {
    if (err) return console.log(err);
    console.log('file deleted successfully');
    })
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
  if(req.body.eventImage){
    body.eventImage = req.body.eventImage
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

