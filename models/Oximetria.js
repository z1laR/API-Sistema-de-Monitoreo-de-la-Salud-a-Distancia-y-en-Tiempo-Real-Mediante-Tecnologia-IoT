/*____                                   __                          
/\  __`\          __                    /\ \__        __             
\ \ \/\ \   __  _/\_\    ___ ___      __\ \ ,_\ _ __ /\_\     __     
 \ \ \ \ \ /\ \/'\/\ \ /' __` __`\  /'__`\ \ \//\`'__\/\ \  /'__`\   
  \ \ \_\ \\/>  </\ \ \/\ \/\ \/\ \/\  __/\ \ \\ \ \/ \ \ \/\ \/\.\_ 
   \ \_____\/\_/\_\\ \_\ \_\ \_\ \_\ \____\\ \__\ \_\  \ \_\ \__/.\_\
    \/_____/\//\/_/ \/_/\/_/\/_/\/_/\/____/ \/__/\/_/   \/_/\/__/\/_/
*/

'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OximetriaSchema = Schema({
    saturacion: Number,
    fecha: {date: Date},
    date: { type: Date, default: Date() }
})

module.exports = mongoose.model('Oximetria', OximetriaSchema)