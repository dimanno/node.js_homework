const read = require('../actions/users.actions');

module.exports = {
    getUsers: async (req, res) => {
        const users = await read.readF();

        res.json(users);
    },

    getUserById: async (req, res) => {
        const users = await read.readF();
        const {user_id} = req.params;
        const userById = users[user_id - 1];

        res.json(userById);
    },

    postUsers: async (req, res) => {
        const users = await read.readF();
        const id = users.length ? users.sort((a, b) => a.id - b.id)[users.length - 1].id + 1 : 1;
        const newUser = {id, ...req.body};
        users.push(newUser);

        await read.writeF(users);

        res.json('succeed');

    },

    updateUsers: async (req, res) => {
        const users = await read.readF();
        const editUsers = users.map(user => {
            const {user_id} = req.params;

            if (user.id === +user_id) {
                return {
                    id: user.id,
                    name: user.name,
                    gender: user.gender,
                    age: user.age,
                };
            }
            return user;
        });
        await read.writeF(editUsers);
        res.json('succeeded');
    },

    deleteUsers: async (req, res) => {
        const users = await read.readF();
        while (users.length > 0) {
            users.pop();
        }
        await read.writeF(users);
        res.json('BD is empty');
    },

    deleteUser: async (req, res) => {
        const users = await read.readF();
        const {user_id} = req.params;
        const updateUsers = users.filter(user => user.id !== +user_id);
        await read.writeF(updateUsers);

        res.json('succeed');
    }
};


