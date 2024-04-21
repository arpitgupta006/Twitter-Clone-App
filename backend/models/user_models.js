const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    dob:{
        type: String,
        required:false
    },
    profileImg:{
        type: String,
        default:'https://pngtree.com/freebackground/builder-posing-in-photo-studio-3d-realistic_2615197.html'
    }
});

mongoose.model("TwitterUserModel" , userSchema)
