const Joi = require("@hapi/joi");

// signup
exports.onSignupValidation = data=>{
const schema = Joi.object({
    first_name:Joi.string().min(3).max(15).required(),
    last_name:Joi.string().min(3).max(15).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(3).max(15).required()})
return schema.validate(data);
}

//signin
exports.onSigninValidation = data=>{
    const schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(3).max(15).required()
    });
    return schema.validate(data);
    }
    
// event 
exports.onEventValidation = data=>{
    const schema = Joi.object({
        title:Joi.string().min(3).max(15).required(),
        description:Joi.string().min(3).max(15).required(),
        start_date: Joi.date().iso().required(),
        end_date : Joi.date().iso().greater(Joi.ref('startTime')).required(),
        venue:Joi.string().min(3).max(15).required()
    });
    return schema.validate(data);
    }
    
// ticket
exports.onTicketValidation = data =>{
const schema = Joi.object({
    ticket_name:Joi.string().min(3).max(15).required(),
    description:Joi.string().min(3).max(15).required(),
    start_date:Joi.date().iso().required(),
    end_date: Joi.date().iso().greater(Joi.ref('startTime')).required(),
    quantity:Joi.number().required(),
    minimum:Joi.number().required(),
    maximum:Joi.number().required(),
    payment_option:Joi.string().min(3).max(15).required(),
    sales_chanel:Joi.string().min(3).max(15),
    amount  :Joi.string().min(3).max(15).required(),
})
return schema.validate(data)
}