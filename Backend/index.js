const express = require("express");
const dotenv = require("dotenv");
const authRoute = require("./authRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api", authRoute);

app.listen(PORT, () => {
  try {
    console.log(`server running on port ${PORT}`);
  } catch (error) {
    console.log("error starting server", error);
  }
});
