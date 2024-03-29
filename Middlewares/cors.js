var allowedOrigins = [
    "https://braincodeishan.github.io",
    "http://localhost:3000",
    "*"
  ];

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

  module.exports=cors;