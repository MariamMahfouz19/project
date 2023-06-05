const express = require('express');
const router = express.Router();
const abnormalSymptoms = require('../config/abnormalSymptoms')


router.get('/show-Abnormal-Symptoms-To-Doctor', abnormalSymptoms.index)
router.post('/show-Abnormal-Symptoms-To-Doctor-By-Patient-Name', abnormalSymptoms.show)
router.post('/store-Abnormal-Symptoms-By-Patient', abnormalSymptoms.store)
router.put('/update-Abnormal-Symptoms-By-Patient', abnormalSymptoms.updateInfo)
router.delete('/delete-Abnormal-Symptoms-By-Doctor-By-Patient-ID', abnormalSymptoms.destroy)

module.exports = router
