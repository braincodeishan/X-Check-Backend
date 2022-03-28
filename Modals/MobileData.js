const mongoose = require('mongoose');


// ************************** Main Schema************************
const mobileDataSchema = new mongoose.Schema({
    name: String,
    image: String,
    highlights: Array,
    rating: String,
    star: Number,
    reviews: reviewsSchema,
    criticRating: String,
    criticStar: Number,
    criticReviews: criticReviewsSchema,
    price: Number,
    priceList: priceListSchema,
    specification: specificationSchema,
    photos: photosSchema,
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
    pCameraWideMP:Number,
    pCameraWideF:Number,
    pCameraUltraWideMP:Number,
    pCameraUltraWideF:Number,
    pCameraMacroMP:Number,
    pCameraMacroF:Number,
    pCameraDepthMP:Number,
    pCameraDepthF:Number,
    pVideoResolution:String,
    sCamera1MP:Number,
    sCamera2MP:Number,
    sVideoResolution:String,
    nfc:Boolean,
    batterymAh:Number,
    chargingWatt:Number,

})

const mobileData = mongoose.Model('Mobile', mobileDataSchema);

module.exports = mobileData;



// ****************************Review Schema***********************
const reviewsSchema = new mongoose.Schema({
    name: String,
    subTitle: String,
    star: Number,
    description: String,
    image: Array,
    date: {
        type:Date,
        default: Date.now()
    }

})

const reviews = mongoose.Model('CustomerReview', reviewsSchema);

module.exports = reviews;




// *********************** Critic Review Schema ********************

const criticReviewsSchema = new mongoose.Schema({
    name: String,
    subTitle: String,
    star: Number,
    description: String,
    image: Array,
    date: {
        type:Date,
        default: Date.now()
    }

})

const criticReviews = mongoose.Model('CustomerReview', criticReviewsSchema);

module.exports = criticReviews;

// *********************** Price List Schema ********************

const priceListSchema = new mongoose.Schema({
    name: String,
    image: String,

})

const priceList = mongoose.Model('CustomerReview', priceListSchema);

module.exports = priceList;




// *********************** Mobile Specification Schema ********************


const specificationSchema = new mongoose.Schema({
    name: String,
    image: String,

})

const specification = mongoose.Model('CustomerReview', specificationSchema);

module.exports = specification;



// *********************** Photos Schema ********************


const photosSchema = new mongoose.Schema({
    title: String,
    source: String,

})

const photos = mongoose.Model('CustomerReview', photosSchema);

module.exports = photosSchema;