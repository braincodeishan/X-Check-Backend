const mongoose=require('mongoose');

const mySchema= new mongoose.Schema({
    name:{
        type:String,
    },
    username:String,
    title:String,
    description:String,
    stars:Number,
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
        default:"https://www.photographyblog.com/uploads/entryImages/_1280xAUTO_crop_center-center_none/apple_iphone_13_pro_review.jpg",
    }
    
})


const reviewsSchema = mongoose.model('Review',mySchema);

module.exports=reviewsSchema;


const stars= new mongoose.Schema({
    phoneId:String,
    fiveStar:{
        type:Number,
        default:0
    },
    fourStar:{
        type:Number,
        default:0
    },
    threeStar:{
        type:Number,
        default:0
    },
    towStar:{
        type:Number,
        default:0
    },
    oneStar:{
        type:Number,
        default:0
    },
})

const starsSchema = mongoose.model('Star',stars);

module.exports=starsSchema;