const LoanApproval = require("../../models/LoanApprovalSchema");

const getStateData = async (req, res) => {
  try {
    const approvals = await LoanApproval.find();
    res.status(200).json(approvals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getStateData;
