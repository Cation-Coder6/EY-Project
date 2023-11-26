require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");

const connectDB = require("./db/connect");

const userRoutes = require("./routes/userRoutes");
const stateListRoutes = require("./routes/stateLoanApprovalRoutes");
const pancardRoutes = require("./routes/pancardRoutes");
const aadharRoutes = require("./routes/aadharRoutes");
const apiRoutes = require("./routes/apiRoutes");
const feededDataRoutes = require("./routes/feededDataRoutes");

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/stateLoanApproval", stateListRoutes);
app.use("/api/v1/panCard", pancardRoutes);
app.use("/api/v1/aadharCard", aadharRoutes);
app.use("/api/v1/apiCall", apiRoutes);
app.use("/api/v1/feedData", feededDataRoutes);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
