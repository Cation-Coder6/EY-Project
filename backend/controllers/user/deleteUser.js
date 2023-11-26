const User = require("../../models/UserSchema");

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the user from the database
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Send a success response
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    // Handle errors
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = deleteUser;
