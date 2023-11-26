const LoanApproval = require("../../models/LoanApprovalSchema");

const deleteStateData = async (req, res) => {
  try {
    const approval = await LoanApproval.findByIdAndDelete(req.params.id);
    if (!approval)
      return res.status(404).json({ message: "Loan approval not found" });
    res.status(200).json({ message: "Loan approval deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteStateData;
