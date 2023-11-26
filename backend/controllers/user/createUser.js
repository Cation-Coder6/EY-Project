const User = require("../../models/UserSchema");

const createUser = async (req, res) => {
  try {
    const { name, crop, aadharNumber, panNumber } = req.body;
    const newUser = new User({
      name,
      crop,
      aadharNumber,
      panNumber,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = createUser;
