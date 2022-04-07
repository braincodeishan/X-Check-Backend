const express= require('express');
const router = express.Router();
const cors= require('cors');


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