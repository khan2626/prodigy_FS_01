const express = require("express");
const { signup, login, logout, dashboard } = require("./authController");

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/dashboard", dashboard);

module.exports = router;
