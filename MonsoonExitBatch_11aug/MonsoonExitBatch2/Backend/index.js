const express = require("express");
const cors = require("cors");
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
const model = require('./model');

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await model(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log('${PORT} is up and running');
});