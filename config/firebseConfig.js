var admin = require("firebase-admin");

const stagingserviceAccount = require('../stagingServiceKey.json');
const prodServiceAccount = require('../prodServiceKey.json');

const NODE_ENV = process.env.NODE_ENV || 'staging';

const initializeFirebase = (serviceAccount) => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    }
    return admin.firestore();
};

if (NODE_ENV === 'prod') {
    initializeFirebase(prodServiceAccount);
    console.log('prod db initialized')
} else {
    initializeFirebase(stagingserviceAccount);
    console.log('staging db initialized')
}


module.exports = {
    initializeFirebase,
    admin,
};
