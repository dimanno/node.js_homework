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

    putUsers: (req, res)=>{
        res.json("Update users")
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

    deleteUserById: (req, res) => {
        read.readF()
            .then(users => {
            const {user_id} = req.params
            const updateUsers = users.filter(user=> user.id !== user_id)

            return read.writeF(updateUsers)
        })
            .then(()=>{
                res.json('user deleted')
            })
            .catch(err => {
            console.log(err);
            res.json('something wrong');
        });
    }
}


