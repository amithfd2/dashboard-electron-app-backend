const express = require('express');

const config = require('../../../config');

const router = express.Router();

router.post('/getKeys', (req, res, next) => {
    try {
        res.json({
            success: true,
            message: 'Success',
            data: config.cognito
        })
    } catch (error) {
        return res.json({
            success: false,
            message: 'Failed to signup user',
            error
        });
    }
})

module.exports = router;