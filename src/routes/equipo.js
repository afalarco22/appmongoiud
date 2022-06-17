const express = require('express')// importamos la libreria express
const equipoSchema = require('../models/equipo')// importamos los esquema de los equipos
const {createEquipo, getEquipo, getEquipoId, actualizarEquipo, borrarEquipo} = require('../controllers/equipo')
const router = express.Router()// llamamos la función Router de express

// crear equipo
router.post('/equipos', createEquipo)

/*
router.post('/equipos', (req,res) =>{
    const equipo = equipoSchema(req.body)
    equipo.
    save().
    then((data)=> res.json(data).
    catch((error)=> res.json({message: error})))

})
*/

//**-------------------------------------------------------------------------------------- */
// obtener todo el equipo
router.get('/equipos',getEquipo )


/*
router.get('/equipos', (req,res) =>{
    equipoSchema
        .find().
        then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))

})
*/

//**-------------------------------------------------------------------------------------- */
// obtener un solo equipo por su ID
router.get('/equipos/:id',getEquipoId )

/*
router.get('/equipos/:id', (req,res) =>{
    const { id } = req.params
    equipoSchema
        .findById(id).
        then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))

})
*/
//**-------------------------------------------------------------------------------------- */
//Actualizar equipo
router.put('/equipos/:id', actualizarEquipo)

/*
router.put('/equipos/:id', (req,res) =>{
    const { id } = req.params
    const {name, estado} = req.body
    equipoSchema
        .updateOne({ _id: id },{ $set: { name, estado } })
        .then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))


})
*/
//**-------------------------------------------------------------------------------------- */
// borrar equipo
router.delete('/equipos/:id',borrarEquipo )

/*
router.delete('/equipos/:id', (req,res) =>{
    const { id } = req.params
   
    equipoSchema
        .remove({ _id: id })
        .then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))


})
*/
module.exports = router // exportamos la ruta