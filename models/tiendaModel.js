import mongoose from "mongoose";

const ciudades = ["Bogota", "Medellin","Pereira","Cali","Sinselejo","Barranquilla","Cartagena"]

const tiendaSchema = mongoose.Schema({
    "_id":{type: Number, default:0},
    "sede":{type: String, require: true, minlength: 3, maxlength: 30},
    "ciudad": {type: String, require: true, enum: ciudades},
    "direccion": {type: String, require: true},
    "disponible":{type: Boolean, require:true}
})

export default mongoose.model("tienda",tiendaSchema);