const mongoose = require('mongoose');

const itemSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required:true
    },
    image:{
        type: String,
        default:'https://pngtree.com/freebackground/builder-posing-in-photo-studio-3d-realistic_2615197.html'
    }
});

mongoose.model("ItemEcommModel" , itemSchema)