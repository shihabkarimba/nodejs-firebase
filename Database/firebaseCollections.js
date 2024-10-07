
const { admin } = require('../config/firebseConfig');

const db = admin.firestore();
const Users = db.collection('users');

module.exports = {
    Users,
}