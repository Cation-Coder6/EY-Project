const FeededData = require("../../models/FeededDataSchema");

const getFeededDataByCropCode = async (req, res) => {
  try {
    const data = await FeededData.findOne({ cropCode: req.query.cropCode });
    if (!data) return res.status(404).json({ message: "Data not found" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getFeededDataByCropCode;
