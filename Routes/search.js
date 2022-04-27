const express= require('express');
const router = express.Router();
const cors= require('cors');
const mobilephone=require('../Modals/MobileData')


router.use(cors());

router
.get('/',(req,res)=>{
    console.log("Search get hit")
    
    res.status(200).json("Data Received")
  })
.post('/',async(req,res)=>{
  const filters=req.body;
  const result= await mobilephone.find();

  
  res.status(200).json(result)
})

module.exports = router;