const mongoose = require("mongoose");

const connect = () => {
    // ------------ (Mongodb Connection) --------
    mongoose.connect("mongodb://localhost:27017/kgs2")
}

module.exports = connect;