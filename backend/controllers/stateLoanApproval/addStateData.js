const LoanApproval = require("../../models/LoanApprovalSchema");

const createStateData = async (req, res) => {
  try {
    const newApproval = new LoanApproval(req.body);
    await newApproval.save();
    res.status(201).json(newApproval);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = createStateData;
