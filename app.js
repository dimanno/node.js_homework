const fs = require('fs');
const path = require('path');

const pathBoys = path.join(__dirname, 'Boys');
const pathGirls = path.join(__dirname, 'Girls');

const sortUsersByGenders = (gender, currentPath, newPath) => {
    fs.readdir(pathBoys, (err, data)=> {
        if (err) {
            console.log(err);
            return
        }
        console.log(data)
    })
}

