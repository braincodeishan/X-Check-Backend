const mongoose=require('mongoose');


const Myschema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    dateOfBirth:Date,
    email:{
        type:String,
        required:true
    },
    phoneNumber:Number,
    password:{
        type:String,
        required:true
    },
})

const User=new mongoose.model('User',Myschema)

module.exports=User;
