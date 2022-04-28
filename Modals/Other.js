const mongoose=require('mongoose');

const passwordChangeSchema=new mongoose.Schema({
    email:String,
    uuid:String,
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '5m' },
      },
})
        
const passwordChange=mongoose.model('Password-Change',passwordChangeSchema);


module.exports={passwordChange}