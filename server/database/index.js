const mongoose = require("mongoose");
const config = require("../config/dev");

require("./models/portfolio");

exports.connect = () => {
  mongoose
    .connect(config.DB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected: ${data.connection.host}`);
    });
};
