const firebaseService = require('../services/firebaseService');

const handleIncomingMessage = async (req, res) => {
  try {
    const From = req.body.From;
    const Body = req.body.Body;

    console.log(From);
    console.log(Body);

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
