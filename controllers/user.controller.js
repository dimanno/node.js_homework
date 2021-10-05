const  bd = require('../database/users.json');
const fs = require('fs');
const read = require('../actions/users.actions')
const path = require('path')

const usersPath = '/home/bigbird/WebstormProjects/dimanno/node.js_homework/database/users.json';
// const userP = path.join(__dirname, '..', 'database', 'users.json')

module.exports = {
    getUsers: (req, res)=> {
        fs.readFile(usersPath, (err,data)=> {
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
        fs.readFile(usersPath, (err,data)=> {
            if (err) {
                console.log(err)
            }
            let usersJSON = data.toString()
            const users = JSON.parse(usersJSON);

            const {user_id} = req.params;
            const userById = users[user_id - 1];
            console.log(userById)
            res.json(userById)
        })
    },

    postUsers: (req, res)=> {
        fs.readFile(usersPath, (err,data)=> {
            if (err) {
               return  console.log(err)
            } else {
                let usersJSON = data.toString()
                const users = JSON.parse(usersJSON);

                console.log({...req.body, id: bd[bd.length - 1].id + 1});
                users.push({...req.body, id: bd[bd.length - 1].id + 1});

                fs.writeFile(usersPath, JSON.stringify(users), (err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            }
        })
        res.json(bd);
    },

    putUsers: (req, res)=>{
        res.json("Update users")
    },

    deleteUsers: (req, res)=>{
        fs.readFile(usersPath, (err,data)=> {
            if (err) {
                return console.log(err)
            } else {
                let usersJSON = data.toString()
                const users = JSON.parse(usersJSON);
                while (users.length > 0) {
                    users.pop()
                }

                fs.writeFile(usersPath, JSON.stringify(users), (err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            }
        })
        res.json(bd)
    }
}


