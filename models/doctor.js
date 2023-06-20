n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                // const mongoose = require('mongoose');

// const doctorSchema = new mongoose.Schema({
//   email: { type: String, unique: true },
//   password: String,
// });

// module.exports = mongoose.model('Doctor', doctorSchema);

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     
    age:{
      type:Number,
      required:true
    },
    gender:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    phonenumber:{
      type:String,
      required:true
    },
    hname:{
      type:String,
      required:true
    },
    
    dept:{
      type:String,
      required:true
    },
    address:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    cpass:{
      type:String,
      required:true
    }
});

module.exports = mongoose.model('Doctor', doctorSchema);
