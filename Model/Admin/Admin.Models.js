const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating admin schema
const adminSchema = new Schema({
  pneumoSmartInfo: {
    info: {
      type: String,
      required: true,
    },
    isAgreedCondition: {
      type: Boolean,
      default: false,
    },
  },
  patientDetails: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: false,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
  },

  questionAnswer: [
    {
      question: {
        type: String,
        required: true,
      },

      answer: {
        type: Array,
        required: true,
      },
    },
  ],
});

const AdminPost = mongoose.model("admin-post", adminSchema);
module.exports = AdminPost;
