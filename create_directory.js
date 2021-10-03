const fs = require('fs');
const path = require('path')

fs.mkdir(path.join(__dirname, 'manOlder20'), ((err)=>{
    if (err) {
        console.log(err)
    }
}));

fs.mkdir(path.join(__dirname, 'manYounger20'), ((err )=> {
    if (err) {
        console.log(err)
    }
}));

fs.mkdir(path.join(__dirname, 'womanOlder20'), ((err )=> {
    if (err) {
        console.log(err)
    }
}));

fs.mkdir(path.join(__dirname, 'womanYounger20'), ((err) => {
    if (err) {
        console.log(err)
    }
}));