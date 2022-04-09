const express = require('express');
const cors = require('cors');
const router = express.Router();
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken')
const User = require('../Modals/Users')
const cookieParser = require("cookie-parser");
const enckey = process.env.ENCKEY;

router.use(express.json())
router.use(express.urlencoded({ extended: true }));

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
  console.log(req.data);
  const { username, email, password } = req.body;
  
  if (!username) {
    res.status(204).json({data: "Something went wrong" })
  }
  else if (username.length < 5) {
    res.status(400).json({ data: "Username is small" })
  }
  else {
    try {
      const hash = await bcrypt.hash(password, 10);
      
      const newUser = new User({
        username: username,
        email: email,
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
  }
})

module.exports=router;