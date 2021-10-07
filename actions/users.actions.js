const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '..', 'database', 'users.json');

const readF = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(usersPath, (err, data) => {
            if (err) {
                reject(err);
            }
            let usersJSON = data.toString();
            const users = JSON.parse(usersJSON);
            resolve(users);
        });
    });
};

const writeF = users => {
    return new Promise((resolve, reject) => {
        fs.writeFile(usersPath, JSON.stringify(users), (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};

module.exports = {
    readF,
    writeF,
};