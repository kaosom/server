const express = require('express');
const twilioController = require('../controllers/twilioController');

const router = express.Router();

router.post('/twilio-webhook', twilioController.handleIncomingMessage);

module.exports = router;
