const express = require("express");
const router = express.Router();
const EventController = require("../controllers/event");
const TicketController = require("../controllers/ticket");

//========================================================== event;
router.post('/event',EventController.creat_event);
router.get('/events',EventController.get_events);
router.get("/events/:id",EventController.get_event);
router.patch("/event/:id",EventController.modify_event);
router.delete("/event/:id",EventController.delete_event)
//========================================================== ticket
router.post('/ticket',TicketController.create_ticket)

module.exports = router