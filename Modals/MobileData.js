const mongoose=require('mongoose');

const mySchema= new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    image:{
        type:Array,
        default:['https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg']
    },
    highlights:Array,
    rating:Number,
    criticRating:Number,
    star: Number,
    price: Number,
    priceList:{
        type:Object,
        default:{
            amazon:0,
            flipkart:0,
            tatacliq:0
        }
    },
    specification:Array,
    xCheckRating:Number,
    twoG:Boolean,
    threeG:Boolean,
    fourG:Boolean,
    fiveG:Boolean,
    announced:Date,
    weight:Number,
    dualSim:Boolean,
    ipxRating:String,
    displayType:String,
    displayHz:Number,
    displayResolutionHeight:Number,
    displayResolutionWidth:Number,
    os:String,
    cpuNoOfCores:Number,
    cpuHz:Number,
    cardSlot:Boolean,
    pCamera:Array,
    pVideoResolution:Object,
    sCamera:Array,
    sVideoResolution:Object,
    nfc:Boolean,
    batterymAh:Number,
    chargingWatt:Number,
    isReviewed:Boolean,
    reviewDate:Date
})


const mobilephone = mongoose.model('MobilePhone',mySchema);

module.exports=mobilephone;