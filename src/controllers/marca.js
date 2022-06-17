const { request, response } = require('express');
const marcaSchema = require('../models/marca')


// crear marca
const createMarca = async (req = request, res = response) => {
    try{
        const marca = marcaSchema(req.body)
        await marca.save()
        res.json(marca)
        
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//-------------------------------------------------------------------------------------------------------------------
// obtener todas las marcas

const obtenerMarca = async (req, res = response) => {
    try{
        //const query = { estado: true};
        const marca = await marcaSchema.find({});
        res.json(marca);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//---------------------------------------------------------------------------------------------
// obtener MARCA por ID
const obtenerMarcaId = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const marca = await marcaSchema.findById(id);
        if(!marca){
            return res.status(404).json({msg: 'No existe la marca'});
        }
        res.json(marca);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//-----------------------------------------------------------------------
//Actualizar marca

const actualizarMarca = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const {name, estado} = req.body
        let marca = await marcaSchema.findById(id);
        if(!marca){
            return res.status(404).json({msg: 'No existe la marca'});
        }
        marca = await marcaSchema.updateOne({ _id: id },{ $set: { name, estado } })
        res.json(marca) 
        
    }catch(error){
        return res.status(500).json({
            error: error
        })
        
    }
}

//---------------------------------------------------------------------------------------
// Borrar marca

const borrareMarca = async (req = request, res = response) => {
    try{
        const { id } = req.params
        let marca = await marcaSchema.findById(id);
        if(!marca){
            return res.status(404).json({msg: 'No existe la marca'});
        }
        marca = await marcaSchema.findByIdAndDelete(id)
        res.json(marca)
             
        
    }catch(error){
        return res.status(500).json({
            error: error
        })
        
    }
}


module.exports = {createMarca, obtenerMarca, obtenerMarcaId, actualizarMarca, borrareMarca  }