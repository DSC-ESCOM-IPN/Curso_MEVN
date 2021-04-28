const express=require("express");
const app=express();
app.get("/", (req, res) => {
    res.end("hello world un cambio ahora si de nuevo?.");
});
app.use((req, res) => {
    res.status(404).send('Error');
});
app.listen(3000,()=>{console.log("Servidor esta listo en el puerto 3000.")});
