// services.js
const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
  Primary_care: {
    type: [String],
    required: false,
    enum: ["Preventive care", "Dental care", "Routine screening", "Optometry"],
    description: "must be one or more of the following values: 'Preventive care', 'Dental care', 'Routine screening', or 'Optometry'"
  },
  Specialty_care: {
    type: [String],
    required: false,
    enum: ["Anesthesiology", "Neurology", "Cardiology", "Obstetrics and Gynecology", "Dermatology", "Ophthalmology", "Endocrinology", "Orthopedics", "Emergency medicine and Critcal care", "Otolaryngology", "Gastroenterology", "Pediatrics", "Hematology", "Physical therapy", "Infectious disease", "Pathology", "Nephrology", "Psychiatry", "Oncology", "Pulmonology", "General surgery", "Rheumatology", "Internal medicine", "Urology"],
    description: "must be one or more of the following values: 'Anesthesiology', 'Neurology', 'Cardiology', 'Obstetrics and Gynecology', 'Dermatology', 'Ophthalmology', 'Endocrinology', 'Orthopedics', 'Emergency medicine and Critcal care', 'Otolaryngology', 'Gastroenterology', 'Pediatrics', 'Hematology', 'Physical therapy', 'Infectious disease', 'Pathology', 'Nephrology', 'Psychiatry', 'Oncology', 'Pulmonology', 'General surgery', 'Rheumatology', 'Internal medicine', or 'Urology'"
  }
});

module.exports = mongoose.model('Services', servicesSchema);
