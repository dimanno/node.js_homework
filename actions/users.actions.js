const fs = require('fs');
const path = require('path');

const usersPath = '/home/bigbird/WebstormProjects/dimanno/node.js_homework/database/users.json';

const readUsers = ()=>{
    fs.readFile(usersPath, (err,data)=>{
        if (err) {
            console.log(err)
        }
        let usersJSON = data.toString()
        const users = JSON.parse(usersJSON);
        console.log(users);
        return users
    })

}