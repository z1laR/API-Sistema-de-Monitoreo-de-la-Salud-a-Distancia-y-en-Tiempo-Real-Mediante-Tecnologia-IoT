'use strict'

const mongoose  = require('mongoose')
const app = require('./app.js')
const config = require('./config')

mongoose.connect(config.db, { 'useNewUrlParser': true, 'useUnifiedTopology': true }, (err, res)  => {
    if(err){
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }

    console.log("\n")
    console.log("+-------  Conexión exitosa a la BD  --------+")
    console.log(`|     Escuchando por el Puerto ---> [${config.port}]  |`)
    console.log(`|-------------------------------------------|`)
    console.log(`| Instituto Tecnológico de San Juan del Río |`)
    console.log(`|  Sistema de Monitoreo Signos Vitales IoT  |`)
    console.log(`|   ©2019 | Todos los derechos reservados.  |`)
    console.log("+-------------------------------------------+")

    app.listen(config.port, () => {
    })
})