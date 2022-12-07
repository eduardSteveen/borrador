import express from "express";

const app = express()
const puerto = process.env.PORT || 8090

app.listen(puerto, ()=>{
    console.log("el servidor se esta ejecutando")
})