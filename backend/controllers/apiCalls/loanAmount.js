const User = require("../../models/UserSchema");
const Aadhar = require("../../models/AadharSchema");
const PanCard = require("../../models/PanCard");
const FeededData = require("../../models/FeededDataSchema");

const loanAmount = async (req, res) => {
  try {
    const { cropCode, aadharNumber } = req.query;

    // Check if cropCode and aadharNumber are provided
    if (!cropCode || !aadharNumber) {
      return res.status(400).json({
        message:
          "Missing required fields: cropCode and aadharNumber must be provided.",
      });
    }

    // Find feeded data by crop code
    const feedData = await FeededData.findOne({ cropCode });
    if (!feedData) {
      return res.status(404).json({ message: "Feeded data not found." });
    }

    const aadharCard = await Aadhar.findOne({ aadharNumber });
    if (!aadharCard) {
      return res.status(404).json({ message: "Aadhar card not found." });
    }

    const panCard = await PanCard.findOne({ cardNumber: aadharCard.panNumber });
    if (!panCard) {
      return res.status(404).json({ message: "Pan card not found." });
    }

    // Calculate predicted values
    const inflation = 0.056;
    const msp = 2201;
    const predictedProduction =
      4255.049 + 1.130073 * feedData.area + 0.1199 * feedData.rainfall;
    const predictedPrice = 2849.09 + -6067.77 * inflation + -0.454842 * msp;
    const predictedRevenue = predictedProduction * predictedPrice;
    const approvalAmount = (predictedRevenue * 20) / 100;

    const responseData = {
      feedData,
      aadharCard,
      panCard,
      inflation,
      msp,
      predictedProduction,
      predictedPrice,
      predictedRevenue,
      approvalAmount,
    };

    // Send response
    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error in loanAmount function:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = loanAmount;
