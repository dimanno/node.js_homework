const mongoose = require('mongoose');
const express = require('express');

const {MONGO_CONNECT_ULI, PORT} = require('./config/config');

const userRouter = require('./routers/users.router');
const loginRouter = require('./routers/router.login');

const app = express();

mongoose.connect(MONGO_CONNECT_ULI);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', userRouter, loginRouter);

app.listen(PORT, () => {
    console.log(`app.listen ${PORT}`);
});


