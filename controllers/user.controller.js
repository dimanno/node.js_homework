const  db = require('../database/users');
const fs = require('fs');
const path = require('path');

const usersPath = '/home/bigbird/WebstormProjects/dimanno/node.js_homework/database/users.json';

module.exports = {
    getUsers: (req, res)=> {
        fs.readFile(usersPath, (err,data)=>{
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
        const {user_id} = req.params;
        fs.readFile(path.join(usersPath), (err, data)=>{
            if (err) {
                console.log(err)
            }
            let userJSON = data.toString()
            const user = JSON.parse(userJSON);
            const userById = user[user_id - 1];
            console.log(userById)
            res.json(userById)
        })
    },

    postUsers: (req, res)=> {
        fs.readFile(usersPath, (err,data)=> {
            if (err) {
                console.log(err)
            } else {
                let usersJSON = data.toString()
                const users = JSON.parse(usersJSON);

                console.log({...req.body, id: db.length + 1});
                users.push({...req.body, id: db.length + 1});

                fs.writeFile(usersPath, JSON.stringify(users), (err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            }
        })
    },

    putUsers: (req, res)=>{
        res.json("Update users")
    },

    deleteUsers: (req, res)=>{
        res.json("Delete users")
    }
}


