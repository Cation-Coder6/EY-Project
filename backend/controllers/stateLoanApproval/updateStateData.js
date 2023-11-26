const LoanApproval = require("../../models/LoanApprovalSchema");

const updateStateData = async (req, res) => {
  try {
    const updatedApproval = await LoanApproval.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedApproval);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = updateStateData;
