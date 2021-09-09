const express = require('express');
const app = express();
const port =   3000;
// process.env.PORT ||
const cors = require('cors');



var allowedOrigins = [
  "https://braincodeishan.github.io",
  "http://127.0.0.1:5500",
  "*"
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
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

// app.post('/search', async (req, res) => {
//   console.log(req.body);
//   const min = req.body.minvalue;
//   const max = req.body.maxvalue;
//   console.log(min, max);
//   var mobile = await Mobile.find({price: {$gte:min,$lte:max}  })
  
//   res.send(mobile);
// })





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

