const  db = require('../database/users');
const fs = require('fs');

const databasePath = '/home/bigbird/WebstormProjects/dimanno/node.js_homework/database/users';

module.exports = {
    getUsers: (req, res)=> {
        fs.readFile(databasePath, (err,data)=>{
            if (err) {
                console.log(err)
            }
            let usersJSON = data.toString()
            const users = JSON.parse(usersJSON);
            console.log(users);
            res.json(users)
        })
    },
    getUserById: (req, res)=> {
        const {user_id} = req.params
        const userById = db[user_id - 1];
        res.json(userById)
    },
    postUsers: (req, res)=> {
        console.log(req.body);
        const newUser = {...req.body, id: db.length + 1};

        fs.writeFile(databasePath, newUser, (err)=>{
            if (err) {
                console.log(err)
            }
        })

        res.json(db)
    },
    putUsers: (req, res)=>{
        res.json("Update users")
    },
    deleteUsers: (req, res)=>{
        res.json("Delete users")
    }
}
