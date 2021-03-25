const express = require("express");
const path = require("path");

const app = express();
const json = 
[
    {"nombre": "Juan", "edad": 20, "mascota": "gato"},
    {"nombre": "ana", "edad":25, "mascota": "perro"}
];


app.get("/", (req, res)=>{
    res.end("Hello express world!");
});

app.get("/escom", (req, res)=>{
    res.end("Saludos al DSC ESCOM");
});

app.get("/html", (req, res)=>{
    res.send("<h1>HTML desde express</h1>");
    res.sendFile(path.join(__dirname, "./hello.html"));
});

app.get("/json", (req, res)=>{
    res.send({"nombre":"Ana"});
});

app.get("/personas/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    res.send(json[id]);
});

app.listen(3000, ()=>{
    console.log("El servidor esta listo");
});