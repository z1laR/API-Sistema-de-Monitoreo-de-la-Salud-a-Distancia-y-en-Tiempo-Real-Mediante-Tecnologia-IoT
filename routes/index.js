'use strict'

const express = require('express')
const signoVitalCtrl = require('../controllers/index')
const api = express.Router()

/*___          ___                       ____                      __                                
/\  _`\       /\_ \                     /\  _`\                   /\ \  __                           
\ \ \L\ \__  _\//\ \     ____    ___    \ \ \/\_\     __    _ __  \_\ \/\_\     __      ___    ___   
 \ \ ,__/\ \/\ \\ \ \   /',__\  / __`\   \ \ \/_/_  /'__`\ /\`'__\/'_` \/\ \  /'__`\   /'___\ / __`\ 
  \ \ \/\ \ \_\ \\_\ \_/\__, `\/\ \L\ \   \ \ \L\ \/\ \L\.\\ \ \//\ \L\ \ \ \/\ \L\.\_/\ \__//\ \L\ \
   \ \_\ \ \____//\____\/\____/\ \____/    \ \____/\ \__/.\_\ \_\\ \___,_\ \_\ \__/.\_\ \____\ \____/
    \/_/  \/___/ \/____/\/___/  \/___/      \/___/  \/__/\/_/\/_/ \/__,_ /\/_/\/__/\/_/\/____/\/___/ 

*/

api.get('/pulso-cardiaco/datos', signoVitalCtrl.getPulsoCardiaco)

api.post('/pulso-cardiaco', signoVitalCtrl.savePulsoCardiaco)

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

api.get('/temperatura-corporal/datos', signoVitalCtrl.getTemperaturaCorporal)

api.post('/temperatura-corporal', signoVitalCtrl.saveTemperaturaCorporal)

/*____                                   __                          
/\  __`\          __                    /\ \__        __             
\ \ \/\ \   __  _/\_\    ___ ___      __\ \ ,_\ _ __ /\_\     __     
 \ \ \ \ \ /\ \/'\/\ \ /' __` __`\  /'__`\ \ \//\`'__\/\ \  /'__`\   
  \ \ \_\ \\/>  </\ \ \/\ \/\ \/\ \/\  __/\ \ \\ \ \/ \ \ \/\ \L\.\_ 
   \ \_____\/\_/\_\\ \_\ \_\ \_\ \_\ \____\\ \__\ \_\  \ \_\ \__/.\_\
    \/_____/\//\/_/ \/_/\/_/\/_/\/_/\/____/ \/__/\/_/   \/_/\/__/\/_/
*/

api.get('/oximetria/datos', signoVitalCtrl.getOximetria)

api.post('/oximetria', signoVitalCtrl.saveOximetria)

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

api.get('/electrocardiograma/datos', signoVitalCtrl.getElectrocardioagrama)

api.post('/electrocardiograma', signoVitalCtrl.saveElectrocardioagrama)

module.exports = api