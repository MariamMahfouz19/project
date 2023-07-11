const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const abnormalSymptoms = new Schema({
  d_id: {
    type: String,
    required:true
  },

  abnormalsymptoms: {
    type: String,
  },
  patientName: {
    type: String,
  },
  doctorName: {
    type: String
  }
});
module.exports = mongoose.model('AbnormalSymptoms', abnormalSymptoms);
