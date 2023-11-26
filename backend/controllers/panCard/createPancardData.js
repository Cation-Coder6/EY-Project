const PanCard = require("../../models/PanCard");

const createPancardData = async (req, res) => {
  console.log(req.body);
  try {
    const newPanCard = new PanCard(req.body);
    await newPanCard.save();
    res.status(201).json({ success: true, data: newPanCard });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = createPancardData;
