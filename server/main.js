const config = require('./env.config.js');

const express = require('express');
const main = express();
const bodyParser = require('body-parser');
var fakedata =  require('./fakedata');






main.use(function (req, res, next) {
    whiteList = ['http://localhost:8100']; 
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

main.use(bodyParser.json());




    main.get("/", (req, res) => res.send(fakedata));

main.listen(3000, () => console.log("Server listening on port 3000!"));




