const { request, response } = require('express');
const estadoEquipoSchema = require('../models/estadoequipo')


// crear estado equipo
const createEstadoEquipo = async (req = request, res = response) => {
    try{
        const estadoEquipo = estadoEquipoSchema(req.body)
        await estadoEquipo.save()
        res.json(estadoEquipo)
        
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//-------------------------------------------------------------------------------------------------------------------
// obtener todos los estados equipo
const getestadoEquipo = async (req, res = response) => {
    try{
        //const query = { estado: true};
        const estadoEquipo = await estadoEquipoSchema.find({});
        res.json(estadoEquipo);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//---------------------------------------------------------------------------------------------
// obtener estado equipo por ID
const getestadoEquipoId = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const estadoEquipo = await estadoEquipoSchema.findById(id);
        if(!estadoEquipo){
            return res.status(404).json({msg: 'No existe el estado del equipo'});
        }
        res.json(estadoEquipo);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//-----------------------------------------------------------------------
//Actualizar estado equipo

const actualizarestadoEquipo = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const {name, estado} = req.body
        let estadoEquipo = await estadoEquipoSchema.findById(id)
        if(!estadoEquipo){
            return res.status(404).json({msg: 'No existe el estado del equipo'});
        }

        estadoEquipo = await estadoEquipoSchema.updateOne({ _id: id },{ $set: { name, estado } })
        res.json(estadoEquipo) 
        
    }catch(error){
        return res.status(500).json({
            error: error
        })
        
    }
}

//---------------------------------------------------------------------------------------
// Borrar  estado equipo

const borrarestadoEquipo = async (req = request, res = response) => {
    try{
        const { id } = req.params
        let estadoEquipo = await estadoEquipoSchema.findById(id)
        if(!estadoEquipo){
            return res.status(404).json({msg: 'No existe el estado del equipo'});
        }
        
        estadoEquipo = await estadoEquipoSchema.findByIdAndDelete(id)
        res.json(estadoEquipo)
             
        
    }catch(error){
        return res.status(500).json({
            error: error
        })
        
    }
}


module.exports = {createEstadoEquipo, getestadoEquipo, getestadoEquipoId, actualizarestadoEquipo, borrarestadoEquipo }