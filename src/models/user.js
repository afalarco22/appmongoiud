const mongoose = require('mongoose')// importamos librería mongoose

// creamos el esquema para usuario
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    
    email: {
        type: String,
        requiered: true

    },

    estado: {
        type: Boolean,
        requiered: true
    },



}, { timestamps: true}) 

//
module.exports = mongoose.model('user', userSchema)// exportamos el esquema para usuario