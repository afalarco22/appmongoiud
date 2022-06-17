const mongoose = require('mongoose')// importamos la librería mongoose

// Creamos el esquema para inventario
const inventarioSchema = mongoose.Schema({
    serial:{
        type: String,
        required: true,
        unique: true
    },
    modelo: {
        type: String,
        requiered: false
    },
    descripcion: {
        type: String,
        requiered: false
    },
    foto_equipo: {
        type: String,
        requiered: false
    },
    color: {
        type: String,
        requiered: false 
    },

    fecha_compra: {
        type: Date,
        requiered: false
    },
    precio: {
        type: Number,
        requiered: false
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        requiered: true
    },
    estado_equipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'estadoequipo',
        requiered: true
    },

    tipo_equipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'equipo',
        requiered: true
    },
    marca: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'marca',
        requiered: true
    }




    
   

}, { timestamps: true}) 


module.exports = mongoose.model('inventario', inventarioSchema)// exportamos el esquema de inventario