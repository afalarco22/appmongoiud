const express = require('express')
const estadoEquipoSchema = require('../models/estadoequipo')
const {createEstadoEquipo, getestadoEquipo, getestadoEquipoId, actualizarestadoEquipo, borrarestadoEquipo} = require('../controllers/estadoEquipo')
const router = express.Router()

// crear estado equipo
router.post('/estadoequipos',createEstadoEquipo )

/*
router.post('/estadoequipos', (req,res) =>{
    const estadoEquipo = estadoEquipoSchema(req.body)
    estadoEquipo.
    save().
    then((data)=> res.json(data).
    catch((error)=> res.json({message: error})))


})
*/

//--------------------------------------------------------------------------------------------------
// obtener todo el equipo
router.get('/estadoequipos',getestadoEquipo)


/*
router.get('/estadoequipos', (req,res) =>{
    estadoEquipoSchema
        .find().
        then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))


})
*/
//----------------------------------------------------------------------------------------------------
// obtener un solo equipo por su ID
router.get('/estadoequipos/:id',  getestadoEquipoId)



/*
router.get('/estadoequipos/:id', (req,res) =>{
    const { id } = req.params
    estadoEquipoSchema
        .findById(id).
        then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))

})
*/

//--------------------------------------------------------------------------------------------

//Actualizar equipo
router.put('/estadoequipos/:id',actualizarestadoEquipo)

/*
router.put('/estadoequipos/:id', (req,res) =>{
    const { id } = req.params
    const {name, estado} = req.body
    estadoEquipoSchema
        .updateOne({ _id: id },{ $set: { name, estado } })
        .then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))

})
*/

//-------------------------------------------------------------------------------------------
// borrar equipo
router.delete('/estadoequipos/:id', borrarestadoEquipo)


/*
router.delete('/estadoequipos/:id', (req,res) =>{
    const { id } = req.params
   
    estadoEquipoSchema
        .remove({ _id: id })
        .then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))


})
*/
module.exports = router // exportaos la ruta para estado equipo