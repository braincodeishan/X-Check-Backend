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
.post('/',(req,res)=>{
  const filters=req.body;
  console.log(filters);
  
  res.status(200).json("Data Received")
})

module.exports = router;