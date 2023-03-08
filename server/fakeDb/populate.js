const mongoose = require("mongoose");
const config = require("../config/dev");
const fakeDb = require("./fakeDb");

const connect = () => {
  mongoose
    .connect(config.DB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async (data) => {
      console.log("start populating DB!!");
      await fakeDb.populate();
      await mongoose.connection.close();
      console.log("Db has been Populated");
      console.log(`Mongodb connected: ${data.connection.host}`);
    });
};

connect();
