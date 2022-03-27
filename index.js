const express = require('express');
const app = express();
const port =  process.env.PORT || 3001;
const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded());


var allowedOrigins = [
  "https://braincodeishan.github.io",
  "http://localhost:3000",
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

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('get funtion hit');
}) 

app.post('/search', async (req, res) => {
  console.log(req.body.price);
  // var mobile = await Mobile.find({price: {$gte:min,$lte:max}  })
  // res.send(mobile);
  res.status(200).json("Data Received")
})

app.get('/mail-schedule', (req, res) => {
  
  res.send('Scheduled Successfully');
  console.log('get funtion hit');
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

