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
        fs.readFile(path.join(__dirname, 'users', `${file}`), ((err,data)=>{
            if (err) {
                console.log(err)
                return;
            }
            let users = JSON.parse(data)
            console.log(data);
        }), )
    })
    })
)



