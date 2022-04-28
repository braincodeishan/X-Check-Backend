const express= require('express');
const router = express.Router();
const cors= require('cors');
const mobilephone=require('../Modals/MobileData')


router.use(cors());

router
.get('/mobiles', async(req,res)=>{
  try{
    console.log("hit")
    const phoneId  = req.params['id']
    const result = await mobilephone.findById(phoneId);
    if(result){
      res.status(200).json(result)  
    }else{
      res.status(204).json("Something went wrong")  ;
    }
  

  } catch(err) {
    res.status(404).json("Something went wrong")  ;
  }
    
    
  })



.post('/',async(req,res)=>{
  const filters=req.body;
  const result= await mobilephone.find();

  
  res.status(200).json(result)
})

module.exports = router;