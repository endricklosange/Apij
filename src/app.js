const hostname ="localhost";
//const http = require('http');
const express = require('express');
const port = 3000;
const server = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo/apinode");

server.use(express.urlencoded());
server.use(express.json());

const postRoute = require("./api/Routes/postRoute");
postRoute(server);

server.listen(port,hostname ,()=>{
    console.log(`Serveur qui retourne le port ${port}`)
})