import express from "express";

const tiendaRouter = express.Router()

//Crear
//POST
tiendaRouter.post("/", (req, res)=>{})

//Leer
//GET
tiendaRouter.get("/", (req, res)=>{})

//Actualizar
//PUT
tiendaRouter.put("/:id", (req, res)=>{})

//Eliminar
//DELETE
tiendaRouter.delete("/:id", (req, res)=>{})