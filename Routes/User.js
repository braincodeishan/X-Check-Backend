const express = require('express');
const cors = require('cors');
const router = express.Router();
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken')
const User = require('../Modals/Users')
const cookieParser = require("cookie-parser");
const enckey = process.env.ENCKEY;


router.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));


router.post('/login', async (req, res) => {
  try{
  const { username, password } = req.body;
  const result = await User.findOne({ username: username });
  const compare = await bcrypt.compare(password, result.password);
  if (compare) {
    const token = JWT.sign(result.username, enckey)
    
    res.cookie("login-token", token, {
      maxAge: 86400000,
      httpOnly:true
    })
    res.status(200).json({ data: 'Login Successful', token: token, name: result.personalInfo.name, username:result.username})
  } else {
    res.status(400).json({ error: 'Login unsuccessful, Invalid Username/Password' })
  }
}catch(err){
  
  res.status(400).json({ Error: 'Something Went wrong in '+err })
}
})

router.get('/tokenverify', async (req, res) => {
  try {
    const token= req.headers.cookie.slice(12);
    const restoken = JWT.verify(token, enckey)
    if (restoken) {
      res.send({ status: 200, Error: 'Login Successful' })
  } else {
      res.send({ status: 400, Error: 'Login unsuccessful, Invalid Username/Password' })
    }
  } catch (err) {
    res.send({ status: 400, error: err })
  }
})

router.get('/logout', async (req, res) => {
  try{
  res.clearCookie('login-token');
  res.status(200).json({data:"Logged out"});
  }catch(err){
    
    res.status(400).json({data:"Something went wrong in Logout"+err});
  }
})


router.post('/register', async (req, res) => {
  console.log(req.body);
  const { username, name, email, mobile, password } = req.body;
  
    try {
      const hash = await bcrypt.hash(password, 10);
      
      const newUser = new User({
        username,
        name,
        email,
        mobile,
        password: hash
      })
      const regresult=newUser.save()
        if(regresult){
          res.status(201).json({ data: "User is registered" })
        }else{
          res.status(400).json({ data: "Something Went Wrong/Please try again" })
        }
    } catch (err) {
      res.status(404).json({ data: "Something went wrong" })
    }
  
})

module.exports=router;