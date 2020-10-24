'use strict'

const PulsoCardiaco = require('../models/PulsoCardiaco.js')
const Temperatura = require('../models/Temperatura.js')
const Oximetria = require('../models/Oximetria.js')
const Electrocardiograma = require('../models/Electrocardiograma.js')

/*___          ___                       ____                      __                                
/\  _`\       /\_ \                     /\  _`\                   /\ \  __                           
\ \ \L\ \__  _\//\ \     ____    ___    \ \ \/\_\     __    _ __  \_\ \/\_\     __      ___    ___   
 \ \ ,__/\ \/\ \\ \ \   /',__\  / __`\   \ \ \/_/_  /'__`\ /\`'__\/'_` \/\ \  /'__`\   /'___\ / __`\ 
  \ \ \/\ \ \_\ \\_\ \_/\__, `\/\ \L\ \   \ \ \L\ \/\ \L\.\\ \ \//\ \L\ \ \ \/\ \L\.\_/\ \__//\ \L\ \
   \ \_\ \ \____//\____\/\____/\ \____/    \ \____/\ \__/.\_\ \_\\ \___,_\ \_\ \__/.\_\ \____\ \____/
    \/_/  \/___/ \/____/\/___/  \/___/      \/___/  \/__/\/_/\/_/ \/__,_ /\/_/\/__/\/_/\/____/\/___/ 

*/

function getPulsoCardiaco (req, res){

	    PulsoCardiaco.find({}, (err, pulsoCardiaco) => {
	        console.log('GET /api/pulso-cardiaco/datos')
	        console.log(req.body)

	        if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`})
	        if(!pulsoCardiaco) return res.status(404).send({message: `No existen registros de productos`})

	        res.status(200).send({pulsoCardiaco})
	    })
}

function savePulsoCardiaco (req, res){

	    console.log('POST /api/pulso-cardiaco')
	    console.log(req.body)

	    let pulsoCardiaco = new PulsoCardiaco()

	    pulsoCardiaco.lpm = req.body.lpm

	    pulsoCardiaco.save((err, pulsoCardiacoStored) =>{
	        if (err) res.status(500).send({message: `Error al realizar la petición ${err}`})

	        res.status(200).send({pulsoCardiaco: pulsoCardiacoStored})
	    })
}

/*_____                                                 __                             ____                                                  ___      
/\__  _\                                               /\ \__                         /\  _`\                                               /\_ \     
\/_/\ \/    __    ___ ___   _____      __   _ __    __ \ \ ,_\ __  __  _ __    __     \ \ \/\_\    ___   _ __   _____     ___   _ __    __  \//\ \    
   \ \ \  /'__`\/' __` __`\/\ '__`\  /'__`\/\`'__\/'__`\\ \ \//\ \/\ \/\`'__\/'__`\    \ \ \/_/_  / __`\/\`'__\/\ '__`\  / __`\/\`'__\/'__`\  \ \ \   
    \ \ \/\  __//\ \/\ \/\ \ \ \L\ \/\  __/\ \ \//\ \L\.\\ \ \\ \ \_\ \ \ \//\ \L\.\_   \ \ \L\ \/\ \L\ \ \ \/ \ \ \L\ \/\ \L\ \ \ \//\ \L\.\_ \_\ \_ 
     \ \_\ \____\ \_\ \_\ \_\ \ ,__/\ \____\\ \_\\ \__/.\_\ \__\ \____/\ \_\\ \__/.\_\   \ \____/\ \____/\ \_\  \ \ ,__/\ \____/\ \_\\ \__/.\_\/\____\
      \/_/\/____/\/_/\/_/\/_/\ \ \/  \/____/ \/_/ \/__/\/_/\/__/\/___/  \/_/ \/__/\/_/    \/___/  \/___/  \/_/   \ \ \/  \/___/  \/_/ \/__/\/_/\/____/
                              \ \_\                                                                               \ \_\                               
                               \/_/                                                                                \/_/                               
*/

function getTemperaturaCorporal (req, res){

	    Temperatura.find({}, (err, temperatura) => {
	        console.log('GET /api/temperatura-corporal/datos')
	        console.log(req.body)

	        if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`})
	        if(!temperatura) return res.status(404).send({message: `No existen registros de productos`})

	        res.status(200).send({temperatura})
	    })
}

function saveTemperaturaCorporal (req, res){

	    console.log('POST /api/temperatura-corporal')
	    console.log(req.body)

	    let temperatura = new Temperatura()

	    temperatura.temperatura = req.body.temperatura

	    temperatura.save((err, temperaturaStored) =>{
	        if (err) res.status(500).send({message: `Error al realizar la petición ${err}`})

	        res.status(200).send({temperatura: temperaturaStored})
	    })
}

/*____                                   __                          
/\  __`\          __                    /\ \__        __             
\ \ \/\ \   __  _/\_\    ___ ___      __\ \ ,_\ _ __ /\_\     __     
 \ \ \ \ \ /\ \/'\/\ \ /' __` __`\  /'__`\ \ \//\`'__\/\ \  /'__`\   
  \ \ \_\ \\/>  </\ \ \/\ \/\ \/\ \/\  __/\ \ \\ \ \/ \ \ \/\ \L\.\_ 
   \ \_____\/\_/\_\\ \_\ \_\ \_\ \_\ \____\\ \__\ \_\  \ \_\ \__/.\_\
    \/_____/\//\/_/ \/_/\/_/\/_/\/_/\/____/ \/__/\/_/   \/_/\/__/\/_/
*/

function getOximetria (req, res){

	    Oximetria.find({}, (err, oximetria) => {
	        console.log('GET /api/oximetria/datos')
	        console.log(req.body)

	        if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`})
	        if(!oximetria) return res.status(404).send({message: `No existen registros de productos`})

	        res.status(200).send({oximetria})
	    })
}

function saveOximetria (req, res){

	    console.log('POST /api/oximetria')
	    console.log(req.body)

	    let oximetria = new Oximetria()

	    oximetria.saturacion = req.body.saturacion

	    oximetria.save((err, oximetriaStored) =>{
	        if (err) res.status(500).send({message: `Error al realizar la petición ${err}`})

	        res.status(200).send({oximetria: oximetriaStored})
	    })
}

/*___    ___                  __                                         __                                                            
/\  _`\ /\_ \                /\ \__                                     /\ \  __                                                       
\ \ \L\_\//\ \      __    ___\ \ ,_\ _ __   ___     ___     __    _ __  \_\ \/\_\    ___      __   _ __    __      ___ ___      __     
 \ \  _\L \ \ \   /'__`\ /'___\ \ \//\`'__\/ __`\  /'___\ /'__`\ /\`'__\/'_` \/\ \  / __`\  /'_ `\/\`'__\/'__`\  /' __` __`\  /'__`\   
  \ \ \L\ \\_\ \_/\  __//\ \__/\ \ \\ \ \//\ \L\ \/\ \__//\ \L\.\\ \ \//\ \L\ \ \ \/\ \L\ \/\ \L\ \ \ \//\ \L\.\_/\ \/\ \/\ \/\ \L\.\_ 
   \ \____//\____\ \____\ \____\\ \__\ \_\\ \____/\ \____\ \__/.\_\ \_\\ \___,_\ \_\ \____/\ \____ \ \_\\ \__/.\_\ \_\ \_\ \_\ \__/.\_\
    \/___/ \/____/\/____/\/____/ \/__/\/_/ \/___/  \/____/\/__/\/_/\/_/ \/__,_ /\/_/\/___/  \/___L\ \/_/ \/__/\/_/\/_/\/_/\/_/\/__/\/_/
                                                                                              /\____/                                  
                                                                                              \_/__/                                   
*/

function getElectrocardioagrama (req, res){

	    Electrocardiograma.find({}, (err, electrocardiograma) => {
	        console.log('GET /api/electrocardiograma/datos')
	        console.log(req.body)

	        if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`})
	        if(!electrocardiograma) return res.status(404).send({message: `No existen registros de productos`})

	        res.status(200).send({electrocardiograma})
	    })
}

function saveElectrocardioagrama (req, res){

	    console.log('POST /api/electrocardiograma')
	    console.log(req.body)

	    let electrocardiograma = new Electrocardiograma()

	    electrocardiograma.mv = req.body.mv

	    electrocardiograma.save((err, electrocardiogramaStored) =>{
	        if (err) res.status(500).send({message: `Error al realizar la petición ${err}`})

	        res.status(200).send({electrocardiograma: electrocardiogramaStored})
	    })
}

module.exports = {
    getPulsoCardiaco,
    savePulsoCardiaco,
    getTemperaturaCorporal,
    saveTemperaturaCorporal,
    getOximetria,
    saveOximetria,
    getElectrocardioagrama,
    saveElectrocardioagrama
}