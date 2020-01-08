const bcrypt = require("bcryptjs");
const User = require("../model/user");
//========================================signup
exports.signUp = (req,res,next) =>{
bcrypt.hash(req.body.password,10).then(
   async (hash) =>{
        let user = new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:hash
        });
   user = await user.save();
   res.status(201).json({
       message:"user created successfully",
       data:user
   })
    }
)
}
//============================================== login
exports.login = async (req,res,next)=>{
const user = await User.findOne({email:req.body.email});
if(!user){
    return res.status(401).json("user is not available")
}

bcrypt.compare(req.body.password, user.password).then(
    async (valid)=>{
        if(!valid){
            return res.status(401).json("incorrect password")
        }
        res.status(200).json({
        userId:user._id,
        token:"token"
        })
    }
)
}