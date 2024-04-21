const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const reviewSchema= new mongoose.Schema({
    reviewText:{
        type: String,
        required:true
    },
    star:{
        type: String,
        required:true
    },
    customer:{
        type:ObjectId,
        ref : "UserEcommModel"
    }
  
});

mongoose.model("ReviewEcommModel" , reviewSchema)