const userCtrl = {};
const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username: username
    });
    await newUser.save();
    res.json({message : 'USER CREATED'});
};

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message : 'USER DELETED'});
};

module.exports = userCtrl;