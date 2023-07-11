/*const express = require('express');
const router = express.Router();
const Appointments = require('../config/appiontments')

router.get('/all-appointments-for-doctor', Appointments.index)
router.post('/apponintment-by-patientname-for-doctor', Appointments.show)
router.post('/add-appointment-by-any-one', Appointments.store)
router.post('/delete-all-appointments-by-doctor-id', Appointments.destroy)

module.exports = router*/

const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../model/appiontments");
const appiontments = require("../config/appiontments");
router.post(
    "/add-new-appointment",
    [
        check("doctorID", "Please Enter a Doctor ID")
        .not()
        .isEmpty(),
        check("doctorName", "Please Enter a Doctor Name")
        .not()
        .isEmpty(),
        check("patientName", "Please enter a Patient Name")
        .not()
        .isEmpty(),
        check("appointmentNo", "Please enter an Appointment Number").isLength({
            max: 3
        }),
    ],
    appiontments.store
);
router.post('/all-appointments-for-doctor', appiontments.index)
router.post('/apponintment-by-day', appiontments.show)
router.post('/delete-all-appointments-by-doctor-id', appiontments.destroy)
module.exports = router;
