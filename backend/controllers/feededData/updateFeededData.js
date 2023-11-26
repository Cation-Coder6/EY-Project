const FeededData = require("../../models/FeededDataSchema");

const updateFeededDataByCropCode = async (req, res) => {
  try {
    const updatedData = await FeededData.findOneAndUpdate(
      { cropCode: req.query.cropCode },
      req.body,
      { new: true }
    );
    if (!updatedData)
      return res.status(404).json({ message: "Data not found" });
    res.json(updatedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = updateFeededDataByCropCode;
