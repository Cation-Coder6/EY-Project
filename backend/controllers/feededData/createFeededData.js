const FeededData = require("../../models/FeededDataSchema");

const createFeededData = async (req, res) => {
  try {
    const newFeededData = new FeededData(req.body);
    await newFeededData.save();
    res.status(201).json(newFeededData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = createFeededData;
