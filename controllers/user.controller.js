const  bd = require('../database/users.json');
const read = require('../actions/users.actions')

module.exports = {
    getUsers: (req, res)=> {
        read.readF().then(users => res.json(users))},

    getUserById: (req, res)=> {
        read.readF()
            .then(users => {
                const {user_id} = req.params;
                const userById = users[user_id - 1]
                res.json(userById)
        })
            .catch(err => {
                console.log(err);
                res.json('something wrong');
            });
    },

    postUsers: (req, res)=> {
        read.readF()
            .then((users) => {
                const id = bd[bd.length - 1].id + 1;
                const newUser = {id, ...req.body}
                users.push(newUser);
            return read.writeF(users);
        })
            .then(() => res.json('succeed'))
            .catch(err => {
                console.log(err);
                res.json('something wrong');
            });
    },

    updateUsers: (req, res)=>{
        read.readF()
            .then(users => {
                const editUsers = users.map(user => {
                    const {user_id} = req.params
                    if (user.id === +user_id) {
                        return {
                            id: user.id,
                            name: user.name,
                            gender: user.gender,
                            age: user.age,
                        }
                    }
                    return user
                })
                return read.writeF(editUsers)
            })
            .then(() => res.json('succeeded'))
            .catch(err => {
                console.log(err);
                res.json('failed');
            });
    },

    deleteUsers: (req, res)=>{
        read.readF().then(users => {
            while (users.length > 0) {
                users.pop()
            }
            return read.writeF(users)
        })
            .then(() => res.json('BD is empty'))
            .catch(err => {
                console.log(err);
                res.json('something wrong');
            });
    },

    deleteUser: (req, res) => {
        read.readF()
            .then(users => {
            const {user_id} = req.params
                console.log(user_id)
            const updateUsers = users.filter(user => user.id !== +user_id);
            return read.writeF(updateUsers)
        })
            .then(() => res.json('succeed'))
            .catch(err => {
            console.log(err);
            res.json('something wrong');
        });
    }
}


