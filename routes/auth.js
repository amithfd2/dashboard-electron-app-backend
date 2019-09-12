var express = require('express');
var router = express.Router();

router.use('/', require('../controllers/api/v1/auth'));

module.exports = router;
