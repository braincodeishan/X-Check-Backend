// **************************Imports**********************
const express = require('express');
const app = express();
const port =  process.env.PORT || 3001;
const search = require('./Routes/search')
const admin = require('./Routes/admin')
const updateMobile = require('./Routes/updateMobile')
const User = require('./Routes/User')
const reviews = require('./Routes/reviews')
const mongoose=require('mongoose');
const cors = require('cors');


const url = "mongodb+srv://braincodeishan:Mongodb_88822@cluster0.gicls.mongodb.net/XCheck?retryWrites=true&w=majority"
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
},
(err) => {
  if(err){
    console.log("Error in mongo DB "+err);
  }else{
    console.log("connection successful to db");
  }
})

// **********************Middlewares***********************
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/search',search);
app.use('/admin',admin);
app.use('/updateMobile',updateMobile);
app.use('/User',User);
app.use('/reviews',reviews);

// CORS Policies
// var allowedOrigins = [
//   "https://braincodeishan.github.io",
//   "http://localhost:3000",
//   "https://teal-pony-51118a.netlify.app/",
//   "*"
// ];
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         var msg =
//           "The CORS policy for this site does not " +
//           "allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     }
//   })
// );

app.use(cors());

// **************************Routes*************************
app.get('/', (req, res) => {
  res.status(200).json("You have Reached the app")
  
}) 

app.post('/feedMobileData',(req,res)=>{
  console.log(req.body);
  res.status(200).json("data received")
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

