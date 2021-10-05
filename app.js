const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    console.log(req)
    res.json("Hello Node JS")
})

app.listen(6000, () => {
    console.log('app.listen 5000')
})


