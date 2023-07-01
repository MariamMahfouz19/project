
const appointment = require("../model/appiontments");
const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
let appointmentNo=0;
const store = async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    let {
        doctorID,
        doctorName,
        patientName,
        reservedDay,
        
    } = req.body;
    try {
      
      let appointmentno = await appointment.findOne({
        appointmentNo: req.body.appointmentNo
      });
      if (appointmentno) {
        return res
          .status(409)
          .json({ message: 'Appointment Number already Taken' });
      }
      let patientname = await appointment.findOne({
        patientName: req.body.patientName
      });
      if (patientname) {
        return res
          .status(409)
          .json({ message: 'Patient Name already Exist' });
      }
      appointmentNo++;
        appointmentno = new appointment({
            doctorID,
            doctorName,
            patientName,
            reservedDay,
            appointmentNo
        });
        //const salt = await bcrypt.genSalt(10);
       // user.password = await bcrypt.hash(password, salt);
       await appointmentno.save();
      //}
      
        const payload = {
            user: {
                id: appointmentno.id
            }
        };

        jwt.sign(
            payload,
            "randomString", {
                expiresIn: 10000
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                  appointmentno
                });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}
// Show the All Appointments For Doctor By doctor ID.
const index = (req, res, next) => {
    appointment.find({doctorID:req.body.doctorID})
    .then(response => {
    res.json({
    response
    })  
})
    .catch(error => {
        res.json({
            message: 'An error Occured...!'
        })
    })
}

//Show an Appointment For a Specfic Patient By Patient Name.
const show = (req, res, next) => {
    let patientName = req.body.patientName
    appointment.find({patientName:patientName})
    .then(response => {
    res.json({
    response
})
})
    .catch(err => {
        message : 'An error occurred...!'
})

}


//Delete All Appointments for a Doctor by Doctor ID.

const destroy = (req, res, next) => { 
    let doctorID = req.body.doctorID
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        appointment.findOneAndRemove(doctorID)
    
    
.then(() => {
    res.json({
        message: 'All Appointments Deleted successfully!!!'
    })
})
    .catch(error => {
        res.json({
        message: 'An error Occured!!!'
    })
})
}}
module.exports = {
    store,
    index,
    show,
    destroy
}
