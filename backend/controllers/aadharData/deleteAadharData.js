const Aadhar = require("../../models/AadharSchema");

const deleteAadharData = async (req, res) => {
  try {
    const aadhar = await Aadhar.findByIdAndDelete(req.params.id);
    if (!aadhar) {
      return res
        .status(404)
        .json({ success: false, message: "Aadhar not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = deleteAadharData;
