import tiendaModel from "../models/tiendaModel.js"

//creacion tienda
export async function createTienda(req, res){
    const tienda = req.body;
    const cant = await tiendaModel.count()+1;

    tienda._id =cant

    let documento = null

    try{
        documento = await tiendaModel.create(tienda)
    }catch(error){
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(201)
    res.send(documento)
}