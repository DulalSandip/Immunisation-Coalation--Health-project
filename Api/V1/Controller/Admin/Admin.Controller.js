const AdminPost = require("../../../V1/Model/Admin/Admin.Models");
const catchAsync = require("../../ErrorHandler/Error.Handler");

module.exports = {
  createDetails: catchAsync(async (req, res) => {
    const findDetails = await AdminPost.findOne({});
    if (!findDetails) {
      const createDetails = await AdminPost.create(req.body);
      if (createDetails) {
        return res.status(201).json({
          status: true,
          message: "Details have been created succesfully in admin side",
          createDetails,
        });
      } else {
        return res.status(400).json({
          status: false,
          message: "Details couldnt be created at this moment",
        });
      }
    } else {
      const updateDetails = await AdminPost.findOneAndUpdate(req.body);

      if (updateDetails) {
        return res.status(200).json({
          status: true,
          message: "Details are updated succesfully",
        });
      } else {
        return res.status(400).json({
          status: false,
          message: "Details couldnt be updated at this moment",
        });
      }
    }
  }),

  getAllDetails: catchAsync(async (req, res) => {
    const findDetails = await AdminPost.find({});
    if (!findDetails) {
      return res.status(404).json({
        status: false,
        message: "No details found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Details are listed below",
        findDetails,
      });
    }
  }),
};
