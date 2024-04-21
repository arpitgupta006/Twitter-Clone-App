const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const postSchema= new mongoose.Schema({
    description:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    likes:[
        {
            type:ObjectId,
            ref: "TwitterUserModel"
        }
    ],
    retweeter:[
        {
            retweetedBy: { type:ObjectId,
            ref: "TwitterUserModel"} 
        }
    ],
    comments:[
        {
            commentedBy: { type:ObjectId,
            ref: "TwitterUserModel"}
        }
    ],
    image:{
        type: String,
        default:'https://pngtree.com/freebackground/builder-posing-in-photo-studio-3d-realistic_2615197.html'
    },
    author:{
        type:ObjectId,
        ref : "TwitterUserModel"
    },
});

mongoose.model("TwitterPostModel" , postSchema)