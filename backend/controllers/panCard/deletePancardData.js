const PanCard = require("../../models/PanCard");

const deletePancardData = async (req, res) => {
  try {
    const cardNumber = req.params.cardNumber;
    const updatedPanCard = await PanCard.findOneAndUpdate(
      { cardNumber: cardNumber },
      req.body,
      { new: true }
    );

    if (!updatedPanCard) {
      return res
        .status(404)
        .json({ success: false, message: "PanCard not found" });
    }

    res.status(200).json({ success: true, data: updatedPanCard });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = deletePancardData;
