const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const config = require("../config/dev");

require("./models/portfolio");
require("./models/user");

exports.connect = () => {
  mongoose
    .connect(config.DB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected: ${data.connection.host}`);
    });
};

exports.initSessionStore = () => {
  const store = new MongoDBStore({
    uri: config.DB_LOCAL,
    collection: "portfolioSession",
    databaseName: "next-portfolio",
  });

  return store;
};
