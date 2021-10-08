const User = require('../database/User');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (e) {
            res.json(e);
        }
    },

    getUserById: async (req, res) => {
        try {
            const {user_id} = req.params;
            const user = await User.findById(user_id);

            res.json(user);
        } catch (e) {
            res.json(e);
        }

    },

    postUsers: async (req, res) => {
        try {
            const newUsers = await User.create(req.body);

            res.json(newUsers);
        } catch (e) {
            res.json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const {user_id} = req.params;
            await User.deleteOne({id: user_id});
            res.json(`user ${user_id} deleted`);
        } catch (e) {
            res.json(e.message);
        }
    },

    loginUser: async (req, res) => {
        try {
            const {login} = await req.body;
            res.json(`Hello ${login}`);
        } catch (e) {
            res.json(e.message);
        }
    }
};
