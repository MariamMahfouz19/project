const User = require('../model/User');

//Update Doctor's Info.
const updateInfo = (req, res, next) => { 
    let doctorID = req.body.doctorID

    
    let updatedData = {
        name: req.body.name || User.name,
        username: req.body.username || User.username,
        email: req.body.email || User.email,
        phone: req.body.phone || User.phone,
        specialization: req.body.specialization || User.specialization,
        Dates: req.body.Dates || User.Dates
    }
    
    User.findByIdAndUpdate(doctorID, {$set: updatedData})
    .then(() => {
    res.json({
        message: 'Doctor\'s Info. updated successfully!'
        })
    })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
        })
    })
    }
//Delete Doctor's Info. 

const destroy = (req, res, next) => { let doctorID = req.body.doctorID
    User.findByIdAndRemove(doctorID)
    .then(() => {
        res.json({
            message: 'Doctor\'s Email deleted successfully!!!'
        })
    })
        .catch(error => {
            res.json({
            message: 'An error Occured!!!'
        })
    })
    }

    module.exports = {

        updateInfo,      //update a Doctor Information
        destroy     //delete a  doctor's email.
    }
