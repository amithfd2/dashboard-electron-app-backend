var express = require('express');
var router = express.Router();

router.use('/api/v1/cognito', require('../controllers/api/v1/cognito'));
// router.use('/auth', require('../controllers/auth'));
// router.get('/auth', () => console.log('hit'))

module.exports = router;
