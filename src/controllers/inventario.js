const { request, response } = require('express');
const inventarioSchema = require('../models/inventario')
const userSchema = require('../models/user')
const marcaSchema = require('../models/marca')
const equipoSchema = require('../models/equipo')
const estadoEquipoSchema = require('../models/estadoequipo')


// crear inventario
const createInventario = async (req = request, res = response) => {
    try{
        // Datos ingresado en el JSON del HTTP que son requerido
        const { serial, usuario, marca, tipo_equipo, estado_equipo } = req.body;
         // BOOLEANO EL cual nos indica si hay una serie ya existente en l abd
         let inventarioBD = await inventarioSchema.findOne({
            $or: [
                {serial}
            ]
        })
        // Si hay un serial ya existente en la BD de inventario, no sale el mensaje de advrtencia
        if(inventarioBD){
            return res.status(400).json({
                msj: 'Ya existe serial'
            })
        }

        const usuarioBD = await userSchema.findOne({
            _id: usuario, estado: true
        })
        // Si no existe el usuario  no muestra el mensaje de advertencia
        if(!usuarioBD){
            return res.status(400).json({
                msj: 'No existe usuario'
            })
        }

        // Booleano que nos indica si hay marca y estado disponible
        const marcaBD = await marcaSchema.findOne({
            _id: marca, estado: true
        })
        // Si no existe la marca o no está disponible nos muestra la advertencia
        if(!marcaBD){
            return res.status(400).json({
                msj: 'No existe la marca'
            })
        }

        // Booleno que nos indica si existe el tipo de quipo y si está disponible
        const equipoBD = await equipoSchema.findOne({
            _id: tipo_equipo, estado: true
        })
        // Si no existe el tipo de equipo o no está diponible nos muestra la advertencia
        if(!equipoBD){
            return res.status(400).json({
                msj: 'No existe el tipo de equipo'
            })
        }
        // Boolenao que nos indica si existe en la BD el estado del equipo 
        const estadoEquipoBD = await estadoEquipoSchema.findOne({
            _id: estado_equipo, estado: true
        })

        // si el equipo no está en la BD o no está activo no muesta la advertencia
        if(!estadoEquipoBD){
            return res.status(400).json({
                msj: 'No existe el estado de equipo'
            })
        }

        // código que se ejecuta si existe y están disponible el usuario, la marca y los equipos
        let inventario = inventarioSchema(req.body)
        inventario.
        save()
        res.json(inventario);
        
 
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//-------------------------------------------------------------------------------------------------------------------
// obtener todos los inventarios
const obtenerInventario = async (req, res = response) => {
    try{
        //const query = { estado: true};
        const inventario = await inventarioSchema.find({});
        res.json(inventario);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}



//---------------------------------------------------------------------------------------------
//Obtner inventario con usuarios activos
const obtenerInventarioActivo = async (req, res = response) =>{
    try {
        let inventario = await inventarioSchema.find({}).
        populate({path: 'usuario',
        match: { 'estado': { $gte: true }  
        }
        })

        let inventario2 = inventario.filter(t=> t.usuario != null)

        res.send(inventario2);
    } catch (error) {
        console.log(error)    
    }
}



//-----------------------------------------------------------------------------------------------
// obtener inventario por ID
const obtenerInventarioId = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const inventario = await inventarioSchema.findById(id);
        if(!inventario){
            return res.status(404).json({msg: 'No existe el el inventario'});
        }
        res.json(inventario);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//-----------------------------------------------------------------------
//Actualizar inventario

const actualizarInventario = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const {serial, modelo, descripcion, foto_equipo, color, fecha_compra, 
            precio, usuario, estado_equipo, tipo_equipo, marca } = req.body
        let inventario = await inventarioSchema.findById(id);
        if(!inventario){
            return res.status(404).json({msg: 'No existe el inventario a actualizar'});
        }
        inventario = await inventarioSchema.updateOne({ _id: id },{ $set: {serial, modelo, descripcion, 
            foto_equipo, color, fecha_compra, precio, usuario, estado_equipo, tipo_equipo, marca } })
        res.json(inventario) 
        
    }catch(error){
        return res.status(500).json({
            error: error
        })
        
    }
}
//---------------------------------------------------------------------------------------
// Borrar inventario

const borrarInventario = async (req = request, res = response) => {
    try{
        const { id } = req.params
        let inventario = await inventarioSchema.findById(id);
        if(!inventario){
            return res.status(404).json({msg: 'No existe el inventario a borrar'});
        }
        inventario = await inventarioSchema.findByIdAndDelete(id)
        res.json(inventario)
             
        
    }catch(error){
        return res.status(500).json({
            error: error
        })
        
    }
}


module.exports = {createInventario, obtenerInventario, obtenerInventarioId, actualizarInventario,
    obtenerInventarioActivo, borrarInventario}