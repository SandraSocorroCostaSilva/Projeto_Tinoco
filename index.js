//console.log("Hello CodeSandbox");

const express = require('express')

const server = express();


server.get('/ping', (req, res) => {
    return res.json({'ping':'pong'});
});

server.use(express.json())

server.listen(process.env.PORT||3000, () => {
    console.log("server on");
});