const User = require("../../models/UserSchema");

const getUser = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find({});

    // Send a success response with the users
    res.status(200).json({ success: true, users });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = getUser;
