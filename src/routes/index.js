const express = require('express');
const twilioController = require('../controllers/twilioController');

const router = express.Router();

router.post('/twilio-webhook', twilioController.handleIncomingMessage);

module.exports = router;

//curl -X POST http://localhost:3000/twilio-webhook -d "From=%2B1234567890&Body=Hello%20Day"
