const mongoose = require("mongoose");

//Defining a user schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        minLength:4,
        require:true
        },
    lastName:{
        type:String,
        minLength:4,
        require:true
    },
    userName:{
      type:String,
     require:true
    },
    mobileNum:{
        type:Number,
        maxLength:10,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
       type:String,
       require:true,
       maxLength:8
    },
    createdAt:{ 
        type: Date, default:Date.now()
    },
    updatedAt:{ 
        type: Date, default:Date.now()
    }

})


module.exports = mongoose.model('Users',userSchema);