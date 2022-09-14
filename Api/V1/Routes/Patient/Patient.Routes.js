const {
  getPneumoSmartInfo,
  patientUpdateInfo,
} = require("../../Controller/Patient/Patient.Controller");

const router = require("express").Router();

router.get("/get/list/details/patient", getPneumoSmartInfo);
router.post("/create/details/patient", patientUpdateInfo);

module.exports = router;
