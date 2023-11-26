const mongoose = require("mongoose");

const loanApprovalSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  approvalStatus: {
    type: Boolean,
    required: true,
  },
  reason: {
    type: String,
    required: true,
    unique: true,
  },
});

const LoanApproval = mongoose.model("LoanApproval", loanApprovalSchema);

module.exports = LoanApproval;
