const mongoose = require("mongoose");

const connect = () => {
  // ------------ (Mongodb Connection) --------
 return mongoose.connect(process.env.MONGO_URL);
};

module.exports = connect;
