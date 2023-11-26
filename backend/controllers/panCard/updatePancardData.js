const PanCard = require("../../models/PanCard");

const updatePancardData = async (req, res) => {
  try {
    const cardNumber = req.params.cardNumber;
    const deletedPanCard = await PanCard.findOneAndDelete({
      cardNumber: cardNumber,
    });

    if (!deletedPanCard) {
      return res
        .status(404)
        .json({ success: false, message: "PanCard not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "PanCard deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = updatePancardData;
