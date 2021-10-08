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
            const users = await User.findById(user_id);
            const userById = users[user_id - 1];

            res.json(userById);
        } catch (e) {
            res.json(e);
        }

    },

    postUsers: async (req, res) => {
        console.log(req.body);
        try {
            const newUsers = await User.create(req.body);

            res.json(newUsers);
        } catch (e) {
            res.json(e.message);
        }
    },

    // updateUsers: async (req, res) => {
    //     const users = await read.readF();
    //     const editUsers = users.map(user => {
    //         const {user_id} = req.params;
    //
    //         if (user.id === +user_id) {
    //             return {
    //                 id: user.id,
    //                 name: user.name,
    //                 gender: user.gender,
    //                 age: user.age,
    //             };
    //         }
    //         return user;
    //     });
    //     await read.writeF(editUsers);
    //     res.json('succeeded');
    // },

    // deleteUsers: async (req, res) => {
    //     const users = await User.find();
    //
    //     while (users.length > 0) {
    //         users.pop();
    //     }
    //
    //     await read.writeF(users);
    //     res.json('BD is empty');
    // },
    //
    // deleteUser: async (req, res) => {
    //     const users = await read.readF();
    //     const {user_id} = req.params;
    //     const updateUsers = users.filter(user => user.id !== +user_id);
    //     await read.writeF(updateUsers);
    //
    //     res.json('succeed');
    // }
};


