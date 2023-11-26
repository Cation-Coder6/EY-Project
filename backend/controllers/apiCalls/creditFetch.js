const Aadhar = require("../../models/AadharSchema");
const Pan = require("../../models/PanCard");

const creditFetch = async (req, res) => {
  const { aadharNumber, panNumber } = req.query;

  // Parameter validations
  if (!aadharNumber || aadharNumber.length != 6) {
    return res.status(400).json({ message: "Invalid Aadhar number" });
  }
  if (!panNumber || panNumber.length !== 6) {
    return res.status(400).json({ message: "Invalid PAN number" });
  }

  let aadharDetails;
  try {
    aadharDetails = await Aadhar.findOne({ aadharNumber }).exec();
    if (!aadharDetails) {
      return res.status(404).json({ message: "Aadhar details not found" });
    }
  } catch (error) {
    console.error("Error fetching Aadhar details:", error);
    return res.status(500).json({ message: "Error retrieving Aadhar details" });
  }

  let panDetails;
  try {
    panDetails = await Pan.findOne({ cardNumber: panNumber }).exec();
    if (!panDetails) {
      return res.status(404).json({ message: "Pan details not found" });
    }
  } catch (error) {
    console.error("Error fetching Pan details:", error);
    return res.status(500).json({ message: "Error retrieving Pan details" });
  }

  res.json({
    data: {
      aadhar: aadharDetails,
      pan: panDetails,
    },
  });
};

module.exports = creditFetch;
