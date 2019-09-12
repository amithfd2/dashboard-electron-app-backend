var express = require('express');
var router = express.Router();

router.use('/cognito', require('../controllers/api/v1/cognito'));

module.exports = router;
