const firebaseService = require('../services/firebaseService');

const handleIncomingMessage = async (req, res) => {
  try {
    const { From, Body } = req.body;

    await firebaseService.saveMessage(From, Body);

    res.set('Content-Type', 'text/xml');
    res.send('<Response></Response>');
  } catch (error) {
    console.error('Error subiendo a Firebase:', error);
    res.status(500).send('Error subiendo a Firebase');
  }
};

module.exports = {
  handleIncomingMessage
};
