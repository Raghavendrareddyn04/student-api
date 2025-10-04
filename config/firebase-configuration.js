var firebase = require("firebase-admin");

var serviceAccount = require("../config/indra-firebase.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});

module.exports.firebase = firebase