const admin = require('firebase-admin');

const saveMessage = async (number, message) => {
  await admin.firestore().collection('conversaciones').add({
    number,
    message,
    timestamp: admin.firestore.FieldValue.serverTimestamp()
  });
};

module.exports = {
  saveMessage
};
