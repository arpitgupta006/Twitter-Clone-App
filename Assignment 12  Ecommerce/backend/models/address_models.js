const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const addressSchema= new mongoose.Schema({
    fullName:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    postalcode:{
        type: String,
        required:true
    },
    country:{
        type: String,
        required:true
    },
    customer:{
        type:ObjectId,
        ref : "UserEcommModel"
    }
  
});

mongoose.model("AddressEcommModel" , addressSchema)