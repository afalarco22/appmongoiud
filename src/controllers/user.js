const { request, response } = require('express');
const userSchema = require('../models/user')


// crear usuario
const createUsuario = async (req = request, res = response) => {
    try{
        const user = userSchema(req.body)
        await user.save()
        res.json(user)
        
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//-------------------------------------------------------------------------------------------------------------------
// obtener todos los usuarios
const getUsuarios = async (req, res = response) => {
    try{
        //const query = { estado: true};
        const user = await userSchema.find({});
        res.json(user);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//---------------------------------------------------------------------------------------------
// obtener usuarios por ID
const getUsuariosId = async (req, res = response) => {
    try{
        const { id } = req.params
        const user = await userSchema.findById(id);
        if(!user){
            return res.status(404).json({msg: 'No existe usuario'});
        }
        res.json(user);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//-----------------------------------------------------------------------
//Actualizar usuario

const actualizarUsuarios = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const {name, email, estado} = req.body
        let user = await userSchema.findById(id);
        
        if(!user){
            return res.status(404).json({msg: 'No existe usuario'});
        }

        user = await userSchema.updateOne({ _id: id },{ $set: { name, email, estado } })
        res.json(user) 
        
    }catch(error){
        return res.status(500).json({
            error: error
        })
        
    }
}

//---------------------------------------------------------------------------------------
// Borrar usuario

const borrarUsuarios = async (req = request, res = response) => {
    try{
        const { id } = req.params
        let user = await userSchema.findById(id);
        if(!user){
            return res.status(404).json({msg: 'No existe usuario'});
        }
        user = await userSchema.findByIdAndDelete(id)
        res.json(user)
             
        
    }catch(error){
        return res.status(500).json({
            error: error
        })
        
    }
}


module.exports = {createUsuario, getUsuarios, getUsuariosId, actualizarUsuarios,borrarUsuarios}