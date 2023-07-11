const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appointment = new Schema({
  doctorID:{
      type : String,
    required:true
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
  appointmentNo1 : {
    type : String,
  },
  appointmentNo2 : {
    type : String,
  },
  appointmentNo3 : {
    type : String,
  },
  appointmentNo4 : {
    type : String,
  },
  appointmentNo5 : {
    type : String,
  },
  appointmentNo6 : {
    type : String,
  },
  appointmentNo7: {
    type : String,
  },
  Date: {
    type: Date,
    default: Date.now()
    }
  }); 
module.exports = mongoose.model('Appointments', appointment);
