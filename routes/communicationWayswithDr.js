const Ways = require('../config/communicationWayswithDr')

const express = require('express');
const router = express.Router();

router.post('/store-ways', Ways.store)
router.put('/update-ways', Ways.updateInfo)
router.post('/show-ways', Ways.index)

router.post('/delete-ways', Ways.destroy)

module.exports = router
