const express = require('express')
const {createUsuario, getUsuarios, getUsuariosId, actualizarUsuarios, borrarUsuarios} = require('../controllers/user')
const router = express.Router()

// Crear usuario

router.post('/users',createUsuario)
/*
router.post('/users', (req,res) =>{
    const user = userSchema(req.body)
    user.
    save().
    then((data)=> res.json(data).
    catch((error)=> res.json({message: error})))

})
*/

//------------------------------------------------------------------------------
// get all users
router.get('/users', getUsuarios)

/*
router.get('/users', (req,res) =>{
    userSchema
        .find().
        then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))

})
*/

//---------------------------------------------------------------------------------------
// Get one user
router.get('/users/:id', getUsuariosId)

/*
router.get('/users/:id', (req,res) =>{
    const { id } = req.params


    userSchema
        .findById(id).
        then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))

})*/

//---------------------------------------------------------------------------------------
// actualizar usuario
router.put('/users/:id', actualizarUsuarios)



/*
router.put('/users/:id', (req,res) =>{
    const { id } = req.params
    const {name, email, estado} = req.body
    userSchema
        .updateOne({ _id: id },{ $set: { name, email, estado } })
        .then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))

})
*/

//------------------------------------------------------------------------------------------
// Delete user
router.delete('/users/:id', borrarUsuarios)



/*
router.delete('/users/:id', (req,res) =>{
    const { id } = req.params
   
    userSchema
        .remove({ _id: id })
        .then((data)=> res.json(data).
        catch((error)=> res.json({message: error})))

})
 
*/



module.exports = router // exportamos la ruta usuarios