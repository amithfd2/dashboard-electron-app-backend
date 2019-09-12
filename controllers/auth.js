const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require('node-fetch');

const config = require('../config');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
    try {
        const { email, name, password } = req.body;
        const poolData = {
            UserPoolId: config.cognito.userPoolId,
            ClientId: config.cognito.clientId
        };

        const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        const attributeList = [];
        const dataEmail = {
            Name: 'email',
            Value: email,
        };
        const dataPersonalName = {
            Name: 'name',
            Value: name,
        };
        const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        const attributePersonalName = new AmazonCognitoIdentity.CognitoUserAttribute(dataPersonalName);
        attributeList.push(attributeEmail);
        attributeList.push(attributePersonalName);

        const user = await new Promise((resolve, reject) => {
            userPool.signUp(email, password, attributeList, null, (err, result) => {
                if (err && err.code !== 'UnknownError') {
                    return reject(err);
                }
                return resolve(result.user);
            });
        });

        res.json({
            success: true,
            message: 'Success',
            user
        });
    } catch (error) {
        return res.json({
            success: false,
            message: 'Failed to signup user',
            error
        })
    }
});

module.exports = router;
