const Aadhar = require("../../models/AadharSchema");

const createAadharData = async (req, res) => {
  try {
    const { name, fatherName, motherName, aadharNumber, location, panNumber } =
      req.body;
    const newAadhar = new Aadhar({
      name,
      fatherName,
      motherName,
      aadharNumber,
      panNumber,
      location,
    });
    await newAadhar.save();
    res.status(201).json({ success: true, data: newAadhar });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = createAadharData;
