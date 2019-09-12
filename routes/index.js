var express = require('express');
var router = express.Router();

router.use('/cognito', require('../controllers/api/v1/cognito'));
// router.use('/auth', require('../controllers/auth'));

module.exports = router;
