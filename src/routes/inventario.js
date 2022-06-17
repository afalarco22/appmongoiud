const express = require('express')
const inventarioSchema = require('../models/inventario')
const {createInventario, obtenerInventario, obtenerInventarioId,obtenerInventarioActivo, 
    actualizarInventario, borrarInventario} = require('../controllers/inventario')
const router = express.Router()
 
// crear inventario sin restricción 
/*
router.post('/inventarios', (req,res) =>{
    const inventario = inventarioSchema(req.body)
    inventario.
    save().
    then((data)=> res.json(data). 
    catch((error)=> res.json({message: error})))


})
*/

// crear inventario verificando usuario activo, tipo equipo, estado equipo y marca
router.post('/inventarios',createInventario)

/*
router.post('/inventarios', async (req,res) =>{

    try {
        // Datos ingresado en el JSON del HTTP que son requerido
        const { serial, usuario, marca, tipo_equipo, estado_equipo } = req.body;

        // BOOLEANO EL cual nos indica si hay una serie ya existente en l abd
        const inventarioBD = await inventarioSchema.findOne({
            $or: [
                {serial}
            ]
        })
        // Si hay un serial ya existente en la BD de inventario, no sale el mensaje de advrtencia
        if(inventarioBD){
            return res.status(400).json({
                msj: 'Ya existe serial '
            })
        }
        // buscamos si en usuario existe por su ID y si está activo
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
                msj: 'No existe el tipo de equipo'
            })
        }

        // código que se ejecuta si existe y están disponible el usuario, la marca y los equipos
        const inventario = inventarioSchema(req.body)
        inventario.
        save().
        then((data)=> res.json(data). 
        catch((error)=> res.json({message: error})))
            
        } catch (error) {
            return res.status(500).json({// Mensaje de error si se presenta uno
                error: error
            })
            
        }
})
*/

//-------------------------------------------------------------------------------------------------
// obtener todo el inventariio
router.get('/inventarios', obtenerInventario)
/*
router.get('/inventarios', (req,res) =>{
    inventarioSchema
        .find().
        then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))


})
*/
//---------------------------------------------------------------------------------------------
// obtener un solo inventario
router.get('/inventarios/:id', obtenerInventarioId)
/*
router.get('/inventarios/:id', (req,res) =>{
    const { id } = req.params
    inventarioSchema
        .findById(id).
        then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))


})
*/
//----------------------------------------------------------------------------------------------------

// obtener solo inventario con usuario activo
router.get('/inventarios_usuario_activo', obtenerInventarioActivo)

/*
router.get('/inventarios_usuario_activo', async (req,res) =>{

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
        
    }})
*/


//-------------------------------------------------------------------------------------------------
//Actualizar inventario
router.put('/inventarios/:id',actualizarInventario )


/*
router.put('/inventarios/:id', (req,res) =>{
    const { id } = req.params
    const {serial, modelo, descripcion, foto_equipo, color, fecha_compra, 
        precio, usuario, estado_equipo, tipo_equipo, marca } = req.body


    inventarioSchema
        .updateOne({ _id: id },{ $set: {serial, modelo, descripcion, 
            foto_equipo, color, fecha_compra, precio, usuario, estado_equipo, tipo_equipo, marca } })
        .then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))


})
*/

//-----------------------------------------------------------------------------------------------
// borrar inventario
router.delete('/inventarios/:id', borrarInventario)

/*
router.delete('/inventarios/:id', (req,res) =>{
    const { id } = req.params
   
    inventarioSchema
        .remove({ _id: id })
        .then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))


})
*/
module.exports = router // exportamos las rutas inventario