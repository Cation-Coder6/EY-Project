const mongoose = require("mongoose");

const aadharSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  panNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  location: {
    village: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
});

const Aadhar = mongoose.model("Aadhar", aadharSchema);

module.exports = Aadhar;
