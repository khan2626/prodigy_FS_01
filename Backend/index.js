const express = require("express");
const dotenv = require("dotenv");
const authRoute = require("./authRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connection = require("./db");

dotenv.config();

const app = express();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from your frontend
//   res.setHeader("Access-Control-Allow-Methods", "POST"); // Specify allowed HTTP methods
//   res.setHeader("Access-Control-Allow-Headers", "*"); // Specify allowed headers
//   next();
// });

const PORT = process.env.PORT || 8000;
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoute);
app.use("/api", authRoute);
app.listen(PORT, () => {
  try {
    connection;
    console.log(`server running on port ${PORT}`);
  } catch (error) {
    console.log("error starting server", error);
  }
});
