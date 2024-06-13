const express = require('express');
const bodyParser = require('body-parser');
const firebaseConfig = require('./config/firebaseConfig');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Configurar Firebase
firebaseConfig.initializeFirebase();

// Configurar el middleware para manejar datos URL-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// Configurar rutas
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
