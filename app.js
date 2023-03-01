const express = require('express');
const logger = require('morgan');
const roomRouter = require('./routes/rooms');
const userRouter = require('./routes/users');

const app = express();
app.use(express.json());
app.use(logger('dev'));

app.use("/rooms", roomRouter);
app.use("/users", userRouter);

app.use((req, res) => {
    if(req.url === "/"){
        res.status(200).send("Welcome to the test API!");
    }
    else{
        res.status(404).send("This page was nuked by Vladimir Putin; sorry about that!");
    }
})


module.exports = app;