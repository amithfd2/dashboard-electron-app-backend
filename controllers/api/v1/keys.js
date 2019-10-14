const express = require('express');

const config = require('../../../config');

const router = express.Router();

router.post('/', (req, res, next) => {
    try {
        res.json({
            success: true,
            message: 'Success',
            data: {
                'GMAIL': {
                    'CLIENT_ID': '110985853758-4paqls23udjt4l8qqb6ln15rp93hgs47.apps.googleusercontent.com',
                    'CLIENT_SECRET': 'geQ99JCY1miz5Bjw-ovq2sBz',
                    'REDIRECT_URI': 'http://localhost:3333/auth_gmail',
                    'SCOPES': ['https://www.googleapis.com/auth/gmail.readonly']
                },
                'GDRIVE': {
                    'CLIENT_ID': '110985853758-4paqls23udjt4l8qqb6ln15rp93hgs47.apps.googleusercontent.com',
                    'CLIENT_SECRET': 'geQ99JCY1miz5Bjw-ovq2sBz',
                    'REDIRECT_URI': 'http://localhost:3333/auth_gdrive',
                    'SCOPES': ['https://www.googleapis.com/auth/drive.readonly']
                },
                'GCAL': {
                    'CLIENT_ID': '110985853758-4paqls23udjt4l8qqb6ln15rp93hgs47.apps.googleusercontent.com',
                    'CLIENT_SECRET': 'geQ99JCY1miz5Bjw-ovq2sBz',
                    'REDIRECT_URI': 'http://localhost:3333/auth_gcal',
                    'SCOPES': ['https://www.googleapis.com/auth/calendar.events.readonly']
                },
                'DROPBOX': {
                    'CLIENT_ID': 'o6un5u75ib3pxxc',
                    'CLIENT_SECRET': 'hyx1spsrgosi2n2'
                },
                'SLACK': {
		    'CLIENT_ID': '666467526306.685278186560',
		    'CLIENT_SECRET': '2c639bb912e64b686db2dd537ec7d602',
                    'SLACKAUTHURL': 'https://slack.com/oauth/authorize?client_id=666467526306.685278186560&scope=search:read'
                },
                'BOX': {
                    'CLIENT_ID': '4tsq3xuhxpuic9zjgi5mrlrb7zvcuz1h',
                    'CLIENT_SECRET': '4GQhSI3mQnfCTe9J4uJNazkQIwESe06K',
                    'REDIRECT_URI': 'http://localhost:3333/auth_box'
                },
                'OUTLOOK': {
                    'CLIENT_ID': '81c3e6c3-9560-43fa-a82e-d00c837e1c3a',
                    'REDIRECT_URI': 'http://localhost:3333/auth_outlook',
                    'SCOPES': 'profile user.read mail.read openid offline_access'
                },
                'EVERNOTE': {
                    'CLIENT_ID': 'prasadkawthekar',
                    'CLIENT_SECRET': '770b30c199781a59',
                    'CALLBACK_URI': 'http://localhost:3333/auth_evernote'
                },
                'GITHUB': {
                    'APP_ID': '35070',
                    'CLIENT_ID': '39414398c3c5f98934ef',
                    'CLIENT_SECRET': '3e09d2c680f98133b1e7284f1cc7011fe82bb264',
                    'SCOPES': 'user,repo,gist,read:org'
                }
            }
        })
    } catch (error) {
        return res.json({
            success: false,
            message: 'Failed',
            error
        });
    }
})

module.exports = router;
