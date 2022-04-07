const mongoose=require('mongoose');

const mySchema= new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    image:String,
    highlights:Array,
    rating:Number,
    criticRating:Number,
    star: Number,
    price: Number,
    priceList:Array,
    specification:Array,
    photos: Array,
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