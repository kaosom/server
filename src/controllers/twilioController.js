const firebaseService = require('../services/firebaseService');

const handleIncomingMessage = async (req, res) => {
  try {
    // Registrar la solicitud entrante
    console.log('Solicitud entrante recibida en /twilio-webhook');
    console.log('Datos del cuerpo de la solicitud:', req.body);

    const From = req.From;
    const Body = req.Body; 

    // Registrar los valores extraídos
    console.log('From:', From);
    console.log('Body:', Body);

    // Subir el mensaje a Firebase
    await firebaseService.saveMessage(From, Body);

    // Registrar éxito
    console.log('Mensaje subido a Firebase con éxito');

    res.set('Content-Type', 'text/xml');
    res.send('<Response></Response>');
  } catch (error) {
    // Registrar error
    console.error('Error subiendo a Firebase:', error);
    res.status(500).send('Error subiendo a Firebase');
  }
};

module.exports = {
  handleIncomingMessage
};
