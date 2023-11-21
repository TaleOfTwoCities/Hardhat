const express = require("express");
const path = require("path");
const app =  express();

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname + "/ind.html"));
})
const M=""
const server = app.listen(8545);
const portnumber = server.address().port
console.log("port is open on "+ portnumber);