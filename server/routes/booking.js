const express = require('express')
const router = express.Router()
const {start_booking,endDate, Booking, renew, overDate, autoChange} = require('../controller/booking')
const { requireLogin } = require('../middleware/middleware')

router.post('/booking',start_booking)
router.post('/endDate',endDate)
router.post('/all_booking',Booking)
router.put('/renew',renew)
router.put('/overDate',overDate)
router.put('/autoChange',autoChange)
module.exports = router