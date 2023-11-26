const PanCard = require("../../models/PanCard");

const getPancardData = async (req, res) => {
  try {
    const panCards = await PanCard.find();
    res.status(200).json({ success: true, data: panCards });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = getPancardData;
