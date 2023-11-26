const mongoose = require("mongoose");

const panCardSchema = new mongoose.Schema({
  cardNumber: {
    type: Number,
    required: true,
  },
  creditAmount: {
    type: Number,
    required: true,
  },
  debitAmount: {
    type: Number,
    required: true,
  },
});

const PanCard = mongoose.model("Pancard", panCardSchema);

module.exports = PanCard;
