const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appointment = new Schema({
  doctorID:{
      type : String,
      //required: "Please Sir, You Must Enter A Doctor ID. "

  },
  doctorName : {
    type : String
  },
  patientName:{
    type : String
  },
   reservedDay : {
    type : String
  },
  appointmentNo : {
    type : String,
  },
  Date: {
    type: Date,
    default: Date.now()
    }
  }); 
module.exports = mongoose.model('Appointments', appointment);
