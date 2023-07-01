/*const Appointment = require('../model/appiontments');


// Show the All Appointments For Doctor By doctor ID.
const index = (req, res, next) => {
    Appointment.find({doctorID:req.body.doctorID})
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
    Appointment.find({patientName:patientName})
    .then(response => {
    res.json({
    response
})
})
    .catch(err => {
        message : 'An error occurred...!'
})

}


//Adding a New Appiontment By Any One.
const store = (req, res, next) => { 
    let AppointmentNo_ = 0
let appoint = new Appointment({
    doctorID : req.body.doctorID,
    doctorName : req.body.doctorName,
    patientName : req.body.patientName,
   // AppointmentNo : AppointmentNo_ 


})

    appoint.save()
    .then(response => {
          appoint        
        , res.json({
            message: ' Appointment Added Successfully!'
    })
})
    .catch(error =>{
        res.json({
            message:'An error occurred!!!'
    })

})

}

//Delete All Appointments for a Doctor by Doctor ID.

const destroy = (req, res, next) => { 
    let doctorID = req.body.doctorID
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        Appointment.findOneAndRemove(doctorID)
    
    
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
    index,          // Show All Appoinments To Doctor By Doctor ID.
    show,          //Show a Specific Appointment By Patient Name.
    store,        //Adding a Appointment By Any One.
    destroy     //delete a  All Appoinments By Doctor Using Doctor ID.
}*/
const appointment = require("../model/appiontments");
const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
let appointmentNo1=0;
let appointmentNo2=0;
let appointmentNo3=0;
let appointmentNo4=0;
let appointmentNo5=0;
let appointmentNo6=0;
let appointmentNo7=0;

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
      
   /*   let appointmentno = await appointment.findOne({
        appointmentNo1: req.body.appointmentNo1
      });
      if (appointmentno) {
        return res
          .status(409)
          .json({ message: 'Appointment Number already Taken' });
      }*/
      let patientname = await appointment.findOne({
        patientName: req.body.patientName
      });
      if (patientname) {
        return res
          .status(409)
          .json({ message: 'Patient Name already Exist' });
      }

     
    let reservedDay=(req.body.reservedDay).toLowerCase();
   // let RD=["saturday","sunday","monday"];
    if(reservedDay=="saturday" && appointmentNo1!=10){
        appointmentNo1++;
       
        appointmentno = new appointment({
            doctorID,
            doctorName,
            patientName,
            reservedDay,
            appointmentNo1
        });
        await appointmentno.save();
    }
   
   else if(reservedDay=="sunday"&& appointmentNo2!=10){
        appointmentNo2++;
       
        appointmentno = new appointment({
            doctorID,
            doctorName,
            patientName,
            reservedDay,
            appointmentNo2
        });
        await appointmentno.save();
    }

    else if(reservedDay=="monday"&& appointmentNo3!=10){
        appointmentNo3++;
       
        appointmentno = new appointment({
            doctorID,
            doctorName,
            patientName,
            reservedDay,
            appointmentNo3
        });
        await appointmentno.save();
    }

    else if(reservedDay=="thuseday" && appointmentNo4!=10){
        appointmentNo4++;
       
        appointmentno = new appointment({
            doctorID,
            doctorName,
            patientName,
            reservedDay,
            appointmentNo4
        });
        await appointmentno.save();
    }
    
    else if(reservedDay=="wensday" && appointmentNo5!=10){
        appointmentNo5++;
       
        appointmentno = new appointment({
            doctorID,
            doctorName,
            patientName,
            reservedDay,
            appointmentNo5
        });
        await appointmentno.save();
    }

    else if(reservedDay=="thrusday" && appointmentNo6!=10){
        appointmentNo6++;
       
        appointmentno = new appointment({
            doctorID,
            doctorName,
            patientName,
            reservedDay,
            appointmentNo6
        });
        await appointmentno.save();
    }

    else if(reservedDay=="friday" && appointmentNo7!=10){
        appointmentNo7++;
       
        appointmentno = new appointment({
            doctorID,
            doctorName,
            patientName,
            reservedDay,
            appointmentNo7
        });
        await appointmentno.save();
    }
    else if(appointmentNo1==10 || appointmentNo2==10 || appointmentNo3==10 || appointmentNo4==10 || appointmentNo5==10 || appointmentNo6==10 ||appointmentNo7==10 ){
        res.json({message:"This Day is complete"})

    }

    /*  appointmentNo++;
        appointmentno = new appointment({
            doctorID,
            doctorName,
            patientName,
            reservedDay,
            appointmentNo
        });*/
        //const salt = await bcrypt.genSalt(10);
       // user.password = await bcrypt.hash(password, salt);
       
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
/*const show = (req, res, next) => {
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
*/

//Show an Appointment For a Specfic Patient By day.
const show = (req, res, next) => {
    //let appointmentno = req.body.appointmentno
    appointment.find({reservedDay:req.body.reservedDay})
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
    appointment.findByIdAndRemove(doctorID)
.then(() => {
    res.json({
        message: 'All Appointements Deleted successfully!!!'
    })
})
    .catch(error => {
        res.json({
        message: 'An error Occured!!!'
    })
})
}
module.exports = {
    store,
    index,
    show,
    destroy
}
