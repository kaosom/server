const admin = require('firebase-admin');
const path = require('path');

const serviceAccountPath = '/etc/secrets/firebaseKey.json';

const initializeFirebase = () => {
  const serviceAccount = require(serviceAccountPath);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
};

module.exports = {
  initializeFirebase
};
