import express from "express";
import {createTienda} from "../controllers/tiendasControlers.js"

const tiendaRouter = express.Router()

//Crear
//POST
tiendaRouter.post("/", (req, res)=>{
    createTienda(req, res)
})

//Leer
//GET
tiendaRouter.get("/", (req, res)=>{})

//Actualizar
//PUT
tiendaRouter.put("/:id", (req, res)=>{})

//Eliminar
//DELETE
tiendaRouter.delete("/:id", (req, res)=>{})

export default tiendaRouter;