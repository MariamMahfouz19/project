const times_of_drugs_Controller = require('../config/times_of_drugs')

const express = require('express');
const router = express.Router();


router.get('/all-drugs-for-patient', times_of_drugs_Controller.index)
router.post('/all-drugs-for-doctor', times_of_drugs_Controller.show_To_Doctor)
router.post('/drug-by-name', times_of_drugs_Controller.show)
router.post('/store-drug', times_of_drugs_Controller.store)
router.post('/update-drug-by-doctor', times_of_drugs_Controller.update)
router.post('/update_times_by_patient', times_of_drugs_Controller.update_times_by_patient)
router.delete('/delete-drug', times_of_drugs_Controller.destroy)

module.exports = router
