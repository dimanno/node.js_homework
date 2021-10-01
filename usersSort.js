const fs = require('fs');
const path = require('path')

fs.readdir(path.join(__dirname, 'users'), ((err, files) => {
        if (err) {
            console.log(err)
            return;
        }

        files.forEach(file => {
            const filePath = path.join(__dirname, 'users', `${file}`);
            fs.readFile(filePath, ((err,data)=>{
                if (err) {
                    console.log(err)
                    return;
                }
                let userJSON = data.toString()
                const user = JSON.parse(userJSON)

                if ((user.age > Number('20')) && (user.gender === "male"))
                {
                    fs.rename(filePath, path.join(__dirname, 'manOlder20', `new${file}`), ((err)=>{
                        console.log(err);
                    }))
                } else if ((user.age <= Number('20')) && (user.gender === 'male'))
                {
                    fs.rename(filePath, path.join(__dirname, 'manYounger20', `new${file}`), ((err)=>{
                        console.log(err);
                    }))
                } else if ((user.age > Number('20')) && (user.gender === 'female')) {
                    fs.rename(filePath, path.join(__dirname, 'womanOlder20', `new${file}`), ((err) => {
                        console.log(err);
                    }))
                } else {
                    fs.rename(filePath, path.join(__dirname, 'womanYounger20', `new${file}`), ((err) => {
                        console.log(err);
                    }))
                }
            }))
        })
    })
)
