// **************************Imports**********************
const express = require('express');
const app = express();
const port =  process.env.PORT || 3001;
const search = require('./Routes/search')
const cors = require('cors');



// **********************Middlewares***********************
app.use(express.json())
app.use(express.urlencoded());
app.use('/search',search);

// CORS Policies
var allowedOrigins = [
  "https://braincodeishan.github.io",
  "http://localhost:3000",
  "https://teal-pony-51118a.netlify.app/",
  "*"
];
app.use(
  cors({
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

// **************************Routes*************************
app.get('/', (req, res) => {
  res.status(400).json("Not Found")
  
}) 



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

