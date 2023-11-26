const Aadhar = require("../../models/AadharSchema");

const updateAadharData = async (req, res) => {
  try {
    const aadharNumber = req.params.aadharNumber;
    const updates = req.body;

    const updatedAadhar = await Aadhar.findOneAndUpdate(
      { aadharNumber: aadharNumber },
      updates,
      { new: true }
    );

    if (!updatedAadhar) {
      return res
        .status(404)
        .json({ success: false, message: "Aadhar not found" });
    }

    res.status(200).json({ success: true, data: updatedAadhar });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = updateAadharData;
