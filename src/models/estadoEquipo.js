const mongoose = require('mongoose')// importamos la librería moongose

//  // creamos el esquema de la colección para tipo de equipo
const estadoEquipoSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    
    estado: {
        type: Boolean,
        requiered: true
    }

}, { timestamps: true}) 


module.exports = mongoose.model('estadoequipo', estadoEquipoSchema)// exportamos el esquema  estado equipo