const mongoose = require("mongoose");

const feededDataSchema = new mongoose.Schema({
  cropCode: {
    type: String,
    required: true,
    unique: true,
  },
  area: {
    type: Number,
    required: true,
  },
  rainfall: {
    type: Number,
    required: true,
  },
});

const FeededData = mongoose.model("FeededData", feededDataSchema);

module.exports = FeededData;
