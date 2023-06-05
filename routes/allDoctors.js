const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/User");
const dbconfig = require('../config/db')

router.get('/show-all-doctors',
    (req, res, next) => {

        User.find()
            .then(response => {
                res.json({
                    response
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error Occured!'
                })
            })
    }
),


    router.post('/show-doctor-by-Name',
        (req, res, next) => {

            let doctorName = req.body.doctorname
            User.find({name : doctorName})
                .then(response => {
                    res.json({
                        response
                    })
                })
                .catch(err => {
                    message: 'An error occurred'
                })
        }
    ),
    router.post('/show-doctor-by-city',
        (req, res, next) => {

            let doctorCity = req.body.doctorCity
            User.find({city : doctorCity})
                .then(response => {
                    res.json({
                        response
                    })
                })
                .catch(err => {
                    message: 'An error occurred'
                })
        }
    ), router.post('/show-doctor-by-specializaion',
        (req, res, next) => {

            let doctorSpecializaion = req.body.doctorSpecializaion
            User.find({ specialization : doctorSpecializaion})
                .then(response => {
                    res.json({
                        response
                    })
                })
                .catch(err => {
                    message: 'An error occurred'
                })
        }
    );
module.exports = router;
