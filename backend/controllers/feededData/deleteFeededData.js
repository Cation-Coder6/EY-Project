const FeededData = require("../../models/FeededDataSchema");

const deleteFeededDataByCropCode = async (req, res) => {
  try {
    const result = await FeededData.deleteOne({
      cropCode: req.query.cropCode,
    });
    if (result.deletedCount === 0)
      return res.status(404).json({ message: "Data not found" });
    res.json({ message: "Data successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteFeededDataByCropCode;
