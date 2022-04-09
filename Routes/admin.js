const express= require('express');
const router = express.Router();
const cors= require('cors');
const mobilephone=require('../Modals/MobileData')
var allowedOrigins = [
    "https://braincodeishan.github.io",
    "http://localhost:3000",
    "*"
  ];
  router.use(cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);
  


router
.get('/updateMobile',async(req,res)=>{
  try{
    console.log("updateMobile hit")
    const result=await mobilephone.findOne({isReviewed:false})
    if(result){
        console.log("success"+result);
        res.status(200).json(result);
    }else{
        console.log("else"+result);
        res.status(200).json({data:"No Data Found",error:400});
    }
  }catch(err){
    console.log("catch block"+err);
    res.status(400).json({data:"no data Found"});
  }

  })
.post('/updateMobile',(req,res)=>{
    
  res.status(200).json("Data Received")
})

module.exports = router;