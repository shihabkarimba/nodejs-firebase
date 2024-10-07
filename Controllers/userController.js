const { Users } = require('../Database/firebaseCollections')

const createUser = async (req, res) => {
    const data = req.body
    await Users.add(data)
    res.send({ "msg": "User added successfully" });
}


const getUsers = async (req, res) => {
    snapshot = await Users.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
}

const updateUser = async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await Users.doc(id).update(data);
    res.send({ msg: "Updated" });
}

const deleteUser = async (req, res) => {
    const id = req.body.id;
    await Users.doc(id).delete();
    res.send({ msg: "Deleted" });
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
}