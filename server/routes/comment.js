const express = require('express')
const router = express.Router()
const {getComment, postComment} = require('../controller/comment')

router.post('/getComment',getComment)
router.post('/postComment',postComment)
module.exports = router