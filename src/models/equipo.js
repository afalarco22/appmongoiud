const mongoose = require('mongoose')// importamos la librería moongose

const equipoSchema = mongoose.Schema({ // creamos el esquema de la colección para tipo de equipo
    name:{
        type: String,
        required: true
    },
    
    estado: {
        type: Boolean,
        requiered: true
    }

    


}, { timestamps: true}) // timestamp nos permite colocar las fechas de creació y actualización automaticamente


module.exports = mongoose.model('equipo', equipoSchema)// exportamos el esquemea que hemos creado para ser usado por las rutas 