const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        const decodedToken = jwt.verify(token, config.jwtSecret);
        if (!decodedToken) {
            return res.json({
                success: false,
                message: 'Unauthorized'
            });
        }
        next();
    } catch (err) {
        return res.json({
            success: false,
            message: 'Unauthorized'
        });
    }
}
