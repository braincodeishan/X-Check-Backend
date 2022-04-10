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
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:{
        type:Array,
        default:[]
    },
    wishList:{
        type:Array,
        default:[]
    },
    comparePhones:{
        type:Array,
        default:[]
    },
    type:{
        type:String,
        default:"CUSTOMER"
    },
    avatar:{
        type:String,
        default:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }
})

const User=new mongoose.model('User',Myschema)

module.exports=User;
