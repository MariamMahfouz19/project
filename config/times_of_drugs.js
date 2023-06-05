const times_of_Drugs = require('../model/times_of_drugs');
// Show the All Times of Drugs For Patient.
const index = (req, res, next) => {
    times_of_Drugs.find({ patientID: req.body.patientID })
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
// Show the All Times of Drugs For Doctor.
const show_To_Doctor = (req, res, next) => {
    times_of_Drugs.find({ d_id: req.body.d_id })
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

//Show a Drugs Info By it's Name
const show = (req, res, next) => {
    let drug_name = req.body.drug_name
    times_of_Drugs.find({ drug_name: drug_name })
        .then(response => {
            res.json({
                response
            })
        })
        .catch(err => {
            message: 'An error occurred...!'
        })

}


//Adding a New Drug Name and It's Times
const store = (req, res, next) => {
    let drug = new times_of_Drugs({
        d_id: req.body.d_id,
        patientID: req.body.patientID,
        drug_name: req.body.drug_name,
        how_often: req.body.how_often,
        time_one: req.body.time_one,
        time_two: req.body.time_two,
        time_three: req.body.time_three,
        every_When: req.body.every_When,
        usage_of_drug: req.body.usage_of_drug

    })

    drug.save()
        .then(response => {
            res.json({
                message: ' Drug Name and It\'s Times Added Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occurred!!!'
            })

        })

}

//Update  Drug Name and It's Times By ID
const update = (req, res, next) => {
    let patinetID = req.body.patinetID
    let updatedData = {
        /* doctorID : req.body.doctorID,
         patientID : req.body.patientID,*/
        drug_name: req.body.drug_name || times_of_Drugs.drug_name,
        how_often: req.body.how_often || times_of_Drugs.how_often,
        time_one: req.body.time_one || times_of_Drugs.time_one,
        time_two: req.body.time_two || times_of_Drugs.time_two,
        time_three: req.body.time_three || times_of_Drugs.time_three,
        every_When: req.body.every_When || times_of_Drugs.every_When,
        usage_of_drug: req.body.usage_of_drug || times_of_Drugs.usage_of_drug
    }

    times_of_Drugs.findOneAndUpdate({ patinetID: patinetID }, { $set: updatedData })
        .then(() => {
            res.json({
                message: 'Drug and It\'s Times updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
            })
        })
}

//Update  Drug Name and It's Times By ID
const update_times_by_patient = (req, res, next) => {
    let patinetID = req.body.patinetID
    let updatedData = {
        time_one: req.body.time_one || times_of_Drugs.time_one,
        time_two: req.body.time_two || times_of_Drugs.time_two,
        time_three: req.body.time_three || times_of_Drugs.time_three

    }

    times_of_Drugs.findOneAndUpdate({ patinetID: patinetID }, { $set: updatedData })
        .then(() => {
            res.json({
                message: 'Times updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
            })
        })
}
//Delete Drug and It's Times by ID

const destroy = (req, res, next) => {
    let patientID = req.body.patientID
    times_of_Drugs.findOneAndRemove({ patientID: patientID })
        .then(() => {
            res.json({
                message: 'Drug and It\'s Times Deleted successfully!!!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!!!'
            })
        })
}
module.exports = {
    index,                  // Show Set of Drugs and It's Times For Patient.
    show_To_Doctor,        // Show Set of Drugs and It's Times For Doctor.
    show,                 //Show a Drug and It's Times By ID.
    store,               //Adding a Drug and It's Times.
    update,             //update a Drug and It's Times.
    update_times_by_patient,
    destroy            //delete a  Drug and It's Times.
}
