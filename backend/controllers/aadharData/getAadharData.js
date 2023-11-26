const Aadhar = require("../../models/AadharSchema");

const getAadharData = async (req, res) => {
  try {
    const aadharRecords = await Aadhar.find();
    res.status(200).json({ success: true, data: aadharRecords });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = getAadharData;
