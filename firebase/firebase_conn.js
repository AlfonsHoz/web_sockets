const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");

const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

const app = initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://web_socket_info.firebaseio.com",
});

const db = getFirestore(app);

module.exports = db;
