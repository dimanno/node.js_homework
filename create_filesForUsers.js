const fs = require('fs');
const path = require('path')
const {users} = require("./users");

        users.forEach(user => {
                const pathFiles = path.join(__dirname, 'users', `${user.name}.json`);
                const userData = `{"name": "${user.name}", \n "gender": "${user.gender}", \n "age": "${user.age}"}`
                fs.writeFile(pathFiles, userData,
                    ((err) => {
                        if (err) {
                            return console.log(err)
                        }
                    }))
            }
        )



