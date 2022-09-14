const { createDetails,getAllDetails } = require("../../Controller/Admin/Admin.Controller");

const router = require("express").Router();

router.post("/create/details", createDetails);
router.get("/get/list/details",getAllDetails)

module.exports = router;
