//you have been create a global middleware whic will rate the limit the request from a user to only 5 request per second .if a user send more than 5 request  in a single second ,the server will block them with a 404. user will be send the userid in the headeras a userid.

const express = require('express');
const app = express();
let Noofrequestforuser = {};
setInterval(() => {
    Noofrequestforuser = {};
}, 5000);

app.use(function (req, res, next) {
    let userid = req.headers["userid"];
    // if (!userid) {
    //     return res.status(400).send("Missing userid");
    // }
    if (Noofrequestforuser[userid]) 
    {
        Noofrequestforuser[userid] = Noofrequestforuser[userid] + 1;
        if (Noofrequestforuser[userid] > 5) {
            res.status(400).send("no entry");
        }
        else 
        {
            next();
        }
    }
    else 
    {
        Noofrequestforuser[userid] = 1
        next();
    }
});
app.get('/user', function (req, res) {
    res.status(200).json({
        name: "anjali",
    });
});

app.post('/user', function (req, res) {
    res.status(200).json({
        msg: "created dummmy user",
    });
});

app.get('/requestuser', function (req, res) {
    res.status(200).json({
        Noofrequestforuser,
    });
});


app.listen(3009);