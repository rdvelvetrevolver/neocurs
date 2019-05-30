const express = require("express");
const app = express();

app.get("/", (req, res )=>{
    res.send("Hola mundo");

})

app.get("/users", (req, res)=>{
    let users = [
        { name: "juan", password: "asdfg" },
        { name: "penas", password: "bnmh" },
 ]

res.send(users);

})

exports.app =app;