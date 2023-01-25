const hostname ="0.0.0.0";
const http = require('http');
const express = require('express');
const port = 3000;
const server = express();

server.get("/",(req,res)=>{
    res.type('html');
    res.status(200);
    res.end("Home");
})
server.get("/posts",(req,res)=>{
    res.type('html');
    res.status(200);
    res.end("Liste des articles");
})
server.post("/posts",(req,res)=>{
    res.type('html');
    res.status(201);
    res.end("Articles créer");
})

server.listen(port,hostname ,()=>{
    console.log(`Serveur qui retourne le port ${port}`)
})