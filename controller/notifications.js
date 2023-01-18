const db = require("../firebase/firebase_conn");

collection = db.collection("notifications");

const notifications = collection.listDocuments;
