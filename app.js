const mongoose = require('mongoose');
const express = require('express');

const {MONGO_CONNECT_ULI, PORT} = require('./config/config');

const userRouter = require('./routers/users.router');
const user_idRouter = require('./routers/users_id.router');

const app = express();

mongoose.connect(MONGO_CONNECT_ULI);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', userRouter, user_idRouter);

app.listen(PORT, () => {
    console.log(`app.listen ${PORT}`);
});


