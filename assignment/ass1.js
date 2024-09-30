//week 3 assignment

//you have to create few standared to middlware for you application

//1.you have to create a middleware for login the no of request on a server(global middleawre app.use)

const express = require('express');
const app = express();
let countrequest = 0;
app.use(function (req, res, next) {
    countrequest = countrequest + 1;
    next();
});
app.get('/user', function (req, res) {
    res.status(200).json({
        name: "anju",
    });
});
app.post('/user', function (req, res) {
    res.status(200).json({
        msg: " created dummy user name",
    })
});

app.get('/countrequest', function (req, res) {
    res.status(200).json({
        countrequest,
    })
});




app.listen(3008);