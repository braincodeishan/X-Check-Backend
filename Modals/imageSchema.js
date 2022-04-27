const mongoose=require('mongoose');

const mySchema= new mongoose.Schema({
    name:{
        type:String,
    },
    username:String,
    phoneId:String,
    date:{
        type:Date,
        default:Date.now()
    },
    likes:{
        type:Number,
        default:0,
    },
    image:{
        type:String,
        default:"",
    }
    
})


const imageSchema = mongoose.model('Camera_Image',mySchema);

module.exports=imageSchema;