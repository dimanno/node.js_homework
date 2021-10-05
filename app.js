const express = require('express');
const userRouter = require('./routers/users.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', userRouter);

app.listen(5001, () => {
    console.log('app.listen 5001')
})


