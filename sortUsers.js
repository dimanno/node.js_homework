const fs = require('fs');
const path = require('path');

const sortUsersByGender = (gender, currentPath, newPath) => {
    fs.readdir(currentPath, (err, data)=> {
        if (err) {
            console.log(err);
            return
        }

        data.forEach(files=> {
            fs.readFile(path.join(currentPath, files), (err,data)=>{
                if (err) {
                    console.log(err);
                    return
                }

                const user =  JSON.parse(data.toString());
                const currentPathOfFile = path.join(currentPath, files);
                const newPathOfFile = path.join(newPath, files);

                if (gender === user.gender) {
                    fs.rename(currentPathOfFile, newPathOfFile, (err)=>{
                        if (err) {
                            console.log(err);
                        }
                    });
                }
            });
        });
    });
}

module.exports = {
    sortUsersByGender
}
