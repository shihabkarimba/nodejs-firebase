var admin = require("firebase-admin");

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
    initializeFirebase(require('../prodServiceKey.json'));
    console.log('prod db initialized')
} else {
    initializeFirebase(require('../prodServiceKey.json'));
    console.log('staging db initialized')
}


module.exports = {
    initializeFirebase,
    admin,
};
