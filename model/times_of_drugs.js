const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const times_of_Drugs = new Schema({
    d_id: {
        type: String,
        required:true
    },
    patientID: {
        type: String,
    },
    drug_name: {
        type: [Object],
        required: "Name of Drug is Required."
    },
    how_often: {
        type: [Object],
        required: "The Number Of Times The Drug is Taken is Required."
    },
    time_one: {
        type: [Object],
        required: "Time For Taking Drug is Required."
    },
    time_two: {
        type: [Object]
    },
    time_three: {
        type: [Object]
    },
    every_When: {
        type: [Object]
    },
    usage_of_drug: {
        type: [Object]
    }
})

const times_of_drugs = mongoose.model('times_of_drugs ', times_of_Drugs);
module.exports = times_of_drugs;
