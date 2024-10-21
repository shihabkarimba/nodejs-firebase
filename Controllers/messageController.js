const { Users, admin } = require('../Database/firebaseCollections')


const findFcmById = async (id) => {
    var snapshot = await Users.doc(id).get();
    var userData = snapshot.data();
    var token = userData.fcmToken;
    return token;
}

const sendMessageById = async (req, res) => {
    try {
        const id = req.body.id;
        var registrationToken = await findFcmById(id);
        console.log('FCM Token:', registrationToken);

        const message = {
            notification: {
              title: 'title',
              body: 'this is body',
            },
            token: registrationToken,
          };

        await admin.messaging().send(message);
        console.log('Notification sent successfully');
        res.send({ msg: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(500).send({ error: 'Failed to send message' });
    }
};



module.exports = {
    sendMessageById,
}