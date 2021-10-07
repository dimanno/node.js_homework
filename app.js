const express = require('express');
const userRouter = require('./routers/users.router');
const user_idRouter = require('./routers/users_id.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', userRouter, user_idRouter);

app.listen(5001, () => {
    console.log('app.listen 5001');
});


