const express = require("express");
const path = require("path");
const app = express();

app.get("/",(res,req) => {
    req.sendFile(path.join(__dirname + "/index.html"));
  
})

const server = app.listen(5000);
const portnumber = server.address().port;
console.log("the port number is " + portnumber);