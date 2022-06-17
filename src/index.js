const express = require('express'); // librería node js para programar aplicaciones web backend
const mongoose = require('mongoose') // Librería para hacer consultas y conexiones  a bases de datos
require('dotenv').config()// importa librería dotenv
const cors = require('cors')



// importación de rutas
const userRoutes = require('./routes/user') // importación rutas API Rest par usuarios
const equipoRoutes = require('./routes/equipo')// importación rutas API Rest para tipo de equipos
const estadoeEquipoRoutes = require('./routes/estadoequipo')// importación rutas API Rest para estado equipos
const marcaRoutes = require('./routes/marca')// importación rutas API Rest para Marcas
const inventarioRoutes = require('./routes/inventario')// Importación rutas para inventario

const app = express();// se ejecuta la librería express
const port = process.env.PORT|| 9000; // conexión al puerto 9000 y al archivo que nos conecta a MongoDB
app.use(cors())

// routes
app.get('/', (req,res)=>{ // prueba api
    res.send('Welcome to my api')

})

// midleware
app.use(express.json()) // se ejecuta la librería express y le adjudicaco las rutas de cada endpoint
app.use('/api', userRoutes)
app.use('/api', equipoRoutes)
app.use('/api', estadoeEquipoRoutes)
app.use('/api', marcaRoutes)
app.use('/api', inventarioRoutes)


// mongoDB conection, conexión a la base de datos MongoDB por medio de la ruta ubicada en el archivo .env
mongoose.connect(process.env.MONGODB_URI)// nos realiza la conección a la librería MongoDB
.then(() =>console.log('Conectado a la base de datos MongoDB Atlas'))
.catch((error) => console.error(error))



app.listen(port, ()=>{// prueba del puerto
    console.log('Server listening on port', port);

})
