const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating patient schema
const patientSchema = new Schema({
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
      shortDescription: {
        type: String,
        required: false,
      },

      answer: {
        type: Array,
        required: true,
      },
    },
  ],
});

const PatientPost = mongoose.model("patient-post", patientSchema);
module.exports = PatientPost;

// "Haematopoietic cell transplant",
//   "Previous episode of invasive pneumococcal disease",
//   "Sickle cell disease or other haemoglobinopathies",
//   "Congenital or acquired asplenia (for example, splenectomy) or hyposplenia",
//   "Congenital or acquired immune deficiency, including symptomatic IgG subclass or isolated IgA deficiency",
//   "Haematological malignancies",
//   "Solid organ transplant",
//   "HIV Infection",
//   "Cochlear Implants",
//   "Intracranial shunts",
//   "Suppurative lung disease in preterm infants",
//   "Relapsing or persistent nephrotic syndrome",
//   "Chronic renal impairment - eGFR <30 mL/min (stage 4 disease)",
//   "Congenital Heart Disease",
//   "Coronary Artery Disease",
//   "Heart Failure",
//   "Children born less than 28 weeks gestation",
//   "Trisomy 21",
//   "Chronic Hepatitis",
//   "Cirrhosis",
//   "Biliary Atresia",
//   "Diabetes",
//   "Smoking (current or in the immediate past)",
//   "Harmful use of alcohol",
//   "Non-haematological malignancies receiving chemotherapy or radiotherapy (currently or anticipated)",
//   "Immunosuppressive therapy - where sufficient vaccine response is expected",
//   "Underlying conditions requiring but not yet receiving immunosuppressive therapy",
//   "Chronic obstructive pulmonary disease (COPD and chronic emphysema)",
//   "Interstitial and fibrotic lung disease",
//   "Severe asthma (frequent hospital visits or use of multiple medications)",
//   "None of the above"
