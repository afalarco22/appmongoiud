const { request, response } = require('express');
const equipoSchema = require('../models/equipo')


// crear equipo
const createEquipo = async (req = request, res = response) => {
    try{
        const equipo = equipoSchema(req.body)
        await equipo.save()
        res.json(equipo)
        
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//-------------------------------------------------------------------------------------------------------------------
// obtener todos los tipos de equipo
const getEquipo = async (req, res = response) => {
    try{
        //const query = { estado: true};
        const equipo = await equipoSchema.find({});
        res.json(equipo);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//---------------------------------------------------------------------------------------------
// obtener equipos por ID
const getEquipoId = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const equipo = await equipoSchema.findById(id);
        if(!equipo){
            return res.status(404).json({msg: 'No existe el equipo'});
        }
        res.json(equipo);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//-----------------------------------------------------------------------
//Actualizar equipo

const actualizarEquipo = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const {name, estado} = req.body
        let equipo = await equipoSchema.findById(id)
        if(!equipo){
            return res.status(404).json({msg: 'No existe el equipo a actualizar'});
        }
        equipo = await equipoSchema.updateOne({ _id: id },{ $set: { name, estado } })
        res.json(equipo) 
        
    }catch(error){
        return res.status(500).json({
            error: error
        })
        
    }
}

//---------------------------------------------------------------------------------------
// Borrar equipo

const borrarEquipo = async (req = request, res = response) => {
    try{
        const { id } = req.params
        let equipo = await equipoSchema.findById(id)
        if(!equipo){
            return res.status(404).json({msg: 'No existe el equipo a borrar'});
        }

        equipo = await equipoSchema.findByIdAndDelete(id)
        res.json(equipo)
             
        
    }catch(error){
        return res.status(500).json({
            error: error
        })
        
    }
}


module.exports = {createEquipo, getEquipo, getEquipoId, actualizarEquipo, borrarEquipo}