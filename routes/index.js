var express = require('express');
var router = express.Router();

router.use('/cognito', require('../controllers/api/v1/cognito'));
router.use('/keys', require('../controllers/api/v1/keys'));

module.exports = router;
