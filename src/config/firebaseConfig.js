const admin = require('firebase-admin');
const serviceAccount = require('../../firebaseKey.json');

const initializeFirebase = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-database-name.firebaseio.com'
  });
};

module.exports = {
  initializeFirebase
};
