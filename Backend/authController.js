const signup = async (req, res) => {
  try {
    res.json({ message: "you signed up" });
  } catch (error) {
    console.log("signup error", error);
  }
};

const login = async (req, res) => {
  try {
    res.json({ message: "you are logged in" });
  } catch (error) {
    console.log("error in login:", error);
  }
};

module.exports = { signup, login };
