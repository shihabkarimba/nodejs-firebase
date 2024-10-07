var admin = require("firebase-admin");
const fs = require('fs');
const path = require('path');


const loadServiceAccount = (filePath) => {
    try {
        const fullPath = path.join(__dirname, filePath);
        if (fs.existsSync(fullPath)) {
            const fileData = fs.readFileSync(fullPath);
            return JSON.parse(fileData);
        } else {
            console.log(`${filePath} not found, returning empty object.`);
            return {};
        }
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
        return {};
    }
};

const stagingserviceAccount = loadServiceAccount('../stagingServiceKey.json');
const prodServiceAccount = loadServiceAccount('../prodServiceKey.json');


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
