const mongoose = require('mongoose')// importamos la librería mongoose

// creamos el esquema para marca
const marcaSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    
    estado: {
        type: String,
        requiered: true
    }

    


}, { timestamps: true}) 


module.exports = mongoose.model('marca', marcaSchema) // exportamos el esquema marcar