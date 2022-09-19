const AdminPost = require("../../../../Model/Admin/Admin.Models");
const catchAsync = require("../../ErrorHandler/Error.Handler");
const PatientPost = require("../../Model/Patient/Patient.Models");

const randomString = require("randomstring");

module.exports = {
  getPneumoSmartInfo: catchAsync(async (req, res) => {
    const pneumoSmartInfo = await AdminPost.find({});
    if (pneumoSmartInfo) {
      return res.status(200).json({
        status: true,
        message: "Every info related to pneumosmartinfo is lsited below",
        pneumoSmartInfo,
      });
    } else {
      return res.status(404).json({
        status: false,
        message: "No any penumosmartinfo found",
      });
    }
  }),

  patientUpdateInfo: catchAsync(async (req, res) => {
  
    const updatePatientInfo = await PatientPost.create(req.body);
    console.log(updatePatientInfo);
    if (updatePatientInfo) {
      return res.status(200).json({
        status: true,
        message: "Patient Info is added succesfully.",
        updatePatientInfo,
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Patient Info couldnt be updated at this moment",
      });
    }
  }),
};
