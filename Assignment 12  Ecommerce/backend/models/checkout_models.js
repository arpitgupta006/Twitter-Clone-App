const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const checkoutSchema= new mongoose.Schema({
    quantity:{
        type: Number,
        required:true
    },
    amount:{
        type: Number,
        required:true
    },
    customer:{
        type:ObjectId,
        ref : "UserEcommModel"
    }  
});

mongoose.model("CheckoutEcommModel" , checkoutSchema)