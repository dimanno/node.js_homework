const fs = require('fs');
const path = require('path')

fs.readdir(path.join(__dirname, 'users'), ((err, files) => {
        if (err) {
            console.log(err)
            return;
        }

        files.forEach(file => {
            const filePath = path.join(__dirname, 'users', file);
            fs.readFile(filePath, ((err,data)=>{
                if (err) {
                    console.log(err)
                    return;
                }
                let userJSON = data.toString()
                const user = JSON.parse(userJSON)

                if ((user.age > 20) && (user.gender === "male"))
                { return fs.rename(filePath, path.join(__dirname, 'manOlder20', `new${file}`), ((err)=>{
                    if (err)
                        console.log(err);
                    }))
                }

                if ((user.age <= 20) && (user.gender === 'male'))
                { return fs.rename(filePath, path.join(__dirname, 'manYounger20', `new${file}`), ((err)=>{
                    if (err)
                        console.log(err);
                    }))
                }

                if ((user.age > 20) && (user.gender === 'female')) {
                    return fs.rename(filePath, path.join(__dirname, 'womanOlder20', `new${file}`), ((err) => {
                        if (err)
                            console.log(err);
                    }))
                }

                return (
                    fs.rename(filePath, path.join(__dirname, 'womanYounger20', `new${file}`), ((err) => {
                        if (err)
                            console.log(err);
                    }))
                )
            }))
        })
    })
)
