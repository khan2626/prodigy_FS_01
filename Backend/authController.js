const User = require("./authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: "all fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.json({ message: "user already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    hashedpassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedpassword,
    });
    await user.save();
    console.log(`${user.name} registered`);
    res.json({ message: "registration successful", user });
  } catch (error) {
    console.log("signup error", error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(409)
        .json({ message: "All fields are required", success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found", success: false });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ message: "Invalid Credential", success: false });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT);
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: true,
      maxAge: 3600000,
    });
    return res.json({ message: "login successful", success: true });
  } catch (error) {
    console.log("error in login:", error);
    res.json("error:", error);
  }
};

const logout = async (req, res) => {
  res.clearCookie("jwt", { httpOnly: true, secure: true, sameSite: "strict" });
  res.json({ message: "logout successful" });
};

const dashboard = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    res.status(401).json({ message: "unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT);
    const user = await User.findById(decoded.userId);
    res.json({
      message: `Hello ${user.name}! You're authorized`,
      user: decoded,
    });
  } catch (error) {
    console.log("Dashboard error:", error);
  }
};

module.exports = { signup, login, logout, dashboard };
