const mongoose=require('mongoose');

const userReviewSchema= new mongoose.Schema({
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


const userReviews = mongoose.model('User_Review',userReviewSchema);



const critiqueReviewSchema= new mongoose.Schema({
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


const criticReviews = mongoose.model('Critic_Review',critiqueReviewSchema);



const userStarSchema= new mongoose.Schema({
    phoneId:String,
    value:{
        type:Array,
        default:[0,0,0,0,0]
    }
})

const userStar = mongoose.model('User_Star',userStarSchema);

const critiqueStarSchema= new mongoose.Schema({
    phoneId:String,
    value:{
        type:Array,
        default:[0,0,0,0,0]
    }
})

const criticStar = mongoose.model('Critic_Star',critiqueStarSchema);

module.exports={
    userStar,
    userReviews,
    criticReviews,
    criticStar
}