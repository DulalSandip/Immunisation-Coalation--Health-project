require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

//calling database
require("./db_connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Welcome to the home page of immunisation coalation.",
  });
});

//routes calling at admin side
const pneumoSmartInfoAdmin = require("./Api/V1/Routes/Admin/Admin.Routes");
// routes calling at patient side
const pneumoSmartInfoPatient = require("./Api/V1/Routes/Patient/Patient.Routes");

app.use("/api/v1", pneumoSmartInfoAdmin, pneumoSmartInfoPatient);

//Defining port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Running succesfully on port ${PORT}`);
});
