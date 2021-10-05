const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '..', 'database', 'users.json')

const readF = ()=>{
    return fs.readFile(usersPath, (err,data)=>{
        if (err) {
            console.log(err)
        }
        let usersJSON = data.toString()
        const users = JSON.parse(usersJSON);
        console.log(users);
        return users
    })
}

module.exports = {
    readF
}