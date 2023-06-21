

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
      
    },
     
    age:{
      type:Number,
    
    },
    gender:{
      type:String,
    
    },
    email:{
      type:String,
    
    },
    phonenumber:{
      type:String,
    
    },
    hname:{
      type:String,
    
    },
    
    dept:{
      type:String,
    
    },
    address:{
      type:String,
    
    },
    password:{
      type:String,
    
    },
    cpass:{
      type:String,
    
    }
});

const doctorModel = mongoose.model("doctor", doctorSchema)
module.exports = doctorModel;
