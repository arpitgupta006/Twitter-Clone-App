const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const UserModel = mongoose.model("UserEcommModel");
const  JWT_SECRET  = process.env.JWT_SECRET

module.exports =(req, res, next)=>{
    const {authorization} = req.headers;
    //Bearer hdghdhdh
    if(!authorization){
        return res.status(404).json({ error: "User not logged in 2" });
    }

    const token = authorization.replace("Bearer " , "")
    jwt.verify(token , JWT_SECRET , (error , payload)=>{
        if(error){
            return res.status(404).json({ error: "User not logged in " });
        }

        const {_id} = payload;
        UserModel.findById(_id)
        .then((dbUser)=>{
            req.user = dbUser;
            next(); //goes to next middleware or rest api 
        })
    });
}

