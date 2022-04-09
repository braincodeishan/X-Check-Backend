const mongoose=require('mongoose');


const Myschema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    personalInfo:{
        name:String,
        employeeID:Number,
        dateOfBirth:Date,
        email:String,
        phoneNumber:Number,
        alternateNumber:Number
    },
    professionalInfo:{
        dateOfJoining:Date,
        dateOfRetirement:Date,
        cadre:String,
        payScale:String,
        basicPay:Number,
        transferTaken:Number
    },
    
    office:{
        circle:String,
        Region:String,
        Division:String,
        officeName:String,
        officeID:Number,
    },
    
    leave:{
        casualLeave:Number,
        earnedLeave:Number,
        RH:Number,
        halfPayLeave:Number
    },
    password:String
})

const User=new mongoose.model('User',Myschema)

module.exports=User;
