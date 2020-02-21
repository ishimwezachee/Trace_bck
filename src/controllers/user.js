const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
require('dotenv').config();

exports.signUp = async (req,res,next)=>{
    const {first_name,last_name,email,password}=req.body;
 //CHECK IF USER EMAIL EXIST 
 const userEmail = await User.findOne({email});
 if(userEmail) return res.status(400).json({error:"email already exits"});

 //HASH PASSWORD 
 const salt = await bcrypt.genSalt(10);
 const hashPassword = await bcrypt.hash(password,salt);
 //CREATE A NEW PASSWORD 
 const user = new User({
     first_name,
     last_name,
     email,
     password:hashPassword
 });
 try{
     const savedUser = await user.save();
// CREATE WEB TOKEN 
     const token = jwt.sign(
        {
          email: user.email,
          userId: user._id
        },
        process.env.JWT_KEY,
        {
          expiresIn: "3h"
        }
      );
     res.status(201).json({
         result:savedUser,
         token:token
     });
 }catch(err){
     res.status(400).json(err)
 }
}

exports.login = async (req,res,next)=>{
    let user = await User.find({email:req.body.email});
    if(!user){
        return res.status(401).json("can not find user")
    }
     //PASSWORD IS CORRECT
     const passwordISCorrect = await bcrypt.compare(req.body.password, user[0].password)
     if (!passwordISCorrect) res.status(400).json({ error: "Wrong password!" });
     // TOKENS 
     const token = jwt.sign(
        {
          email: user[0].email,
          userId: user[0]._id
        },
        process.env.JWT_KEY,
        {
          expiresIn: "3h"
        }
      );
     res.status(200).json({
         
          token:token
         });
}