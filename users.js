const users = [
    {
        name: 'Andriy',
        gender: 'male',
        age: 24
    },
    {
        name: 'Olya',
        gender: 'female',
        age: 18
    },
    {
        name: 'Anton',
        gender: 'male',
        age: 54
    },
    {
        name: 'Marianna',
        gender: 'female',
        age: 20
    },
    {
        name: 'Tadey',
        gender: 'male',
        age: 30
    },
    {
        name: 'Dmytro',
        gender: 'male',
        age: 18
    },
    {
        name: 'Jesica',
        gender: 'female',
        age: 22
    },
    {
        name: 'Odri',
        gender: 'female',
        age: 16
    },
    {
        name: 'Katrin',
        gender: 'female',
        age: 25
    },
    {
        name: 'Ivan',
        gender: 'male',
        age: 27
    },
    {
        name: 'Juliya',
        gender: 'female',
        age: 18
    },
    {
        name: 'Tereza',
        gender: 'female',
        age: 28
    }
    ];

const fs = require('fs');
const path = require('path')

users.forEach(user => {
    const pathFiles = path.join(__dirname, 'users', `${user.name}.json`);
    const userData = `{"Name": "${user.name}", \n "Gender": "${user.gender}", \n "Age": "${user.age}"}`
    fs.writeFile(pathFiles, userData,
        ((err) => {
            if (err) {
                return console.log(err)
            }
        }))
}
)

// const sortUsers = (name, gender, age) => {
//     fs.readdir(__dirname)
//     fs.rename()
//
// }


fs.readdir(path.join(__dirname, 'users'), ((err, files) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(files)
    files.forEach(file => {
        const filePath = path.join(__dirname, 'users', `${file}`);
        fs.readFile(filePath, ((err,data)=>{
            if (err) {
                console.log(err)
                return;
            }
            let users = JSON.parse(data)
            console.log(users);
            if ((users.age >  Number('20')) && (users.gender = 'male'))
            {
                fs.rename(filePath, path.join(__dirname, 'manOlder20', `new${file}`), ((err)=>{
                    console.log(err);
                }))
            } else if ((users.age <= Number('20')) && (users.gender = 'male'))
            {
                fs.rename(filePath, path.join(__dirname, 'manYounger20', `new${file}`), ((err)=>{
                    console.log(err);
                }))
            } else if ((users.age > Number('20')) && (users.gender = 'female')) {
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




