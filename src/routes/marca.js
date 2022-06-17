const express = require('express')
//const marcaSchema = require('../models/marca')
const {createMarca, obtenerMarca, obtenerMarcaId, actualizarMarca, borrareMarca} = require('../controllers/marca')
const router = express.Router()

// crear equipo
router.post('/marcas',createMarca )

/*
router.post('/marcas', (req,res) =>{
    const marca = marcaSchema(req.body)
    marca.
    save().
    then((data)=> res.json(data).
    catch((error)=> res.json({message: error})))


})
*/

//--------------------------------------------------------------------------------------------------
// obtener todo el equipo

router.get('/marcas',obtenerMarca )

/*
router.get('/marcas', (req,res) =>{
    marcaSchema
        .find().
        then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))


})
*/

// obtener un solo equipo
router.get('/marcas/:id', obtenerMarcaId)



/*
router.get('/marcas/:id', (req,res) =>{
    const { id } = req.params
    marcaSchema
        .findById(id).
        then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))

})
*/

//----------------------------------------------------------------------------------------------------
//Actualizar equipo

router.put('/marcas/:id',actualizarMarca)

/*
router.put('/marcas/:id', (req,res) =>{
    const { id } = req.params
    const {name, estado} = req.body
    marcaSchema
        .updateOne({ _id: id },{ $set: { name, estado } })
        .then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))


})
*/




//-----------------------------------------------------------------------------------------
// borrar marca
router.delete('/marcas/:id',borrareMarca )

/*
router.delete('/marcas/:id', (req,res) =>{
    const { id } = req.params
   
    marcaSchema
        .remove({ _id: id })
        .then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))

})
*/
module.exports = router // exportamos las rutas de marca