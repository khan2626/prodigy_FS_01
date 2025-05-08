const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGO_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("mongodb connected");
});

connection.on("error", (error) => {
  console.log("mongodb error:", error);
});

module.exports = connection;
