const express = require('express');
const jwt = require('jsonwebtoken');

const config = require('../../../config');

const router = express.Router();

router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (username === config.user.name && password === config.user.pass) {
            const token = jwt.sign({ user: username }, config.jwtSecret);
            return res.json({
                success: true,
                message: 'Authenticated successfully',
                user: { token }
            })
        } else {
            res.json({
                success: false,
                message: 'Failed to authenticate'
            });
        }
    } catch (error) {
        res.json({
            success: false,
            message: 'Failed to authenticate',
            error
        });
    }
})

module.exports = router;
