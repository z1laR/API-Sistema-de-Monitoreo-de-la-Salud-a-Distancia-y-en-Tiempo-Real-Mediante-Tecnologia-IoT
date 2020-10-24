/*
 ____          ___                       ____                      __                                
/\  _`\       /\_ \                     /\  _`\                   /\ \  __                           
\ \ \/\ \__  _\//\ \     ____    ___    \ \ \/\_\     __    _ __  \_\ \/\_\     __      ___    ___   
 \ \ ,__/\ \/\ \\ \ \   /',__\  / __`\   \ \ \/_/_  /'__`\ /\`'__\/'_` \/\ \  /'__`\   /'___\ / __`\ 
  \ \ \/\ \ \_\ \\_\ \_/\__, `\/\ \/\ \   \ \ \/\ \/\ \/\.\\ \ \//\ \/\ \ \ \/\ \/\.\_/\ \__//\ \/\ \
   \ \_\ \ \____//\____\/\____/\ \____/    \ \____/\ \__/.\_\ \_\\ \___,_\ \_\ \__/.\_\ \____\ \____/
    \/_/  \/___/ \/____/\/___/  \/___/      \/___/  \/__/\/_/\/_/ \/__,_ /\/_/\/__/\/_/\/____/\/___/ 
*/

'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PulsoCardiacoSchema = Schema({
    lpm: Number,
    fecha: {date: Date},
    date: { type: Date, default: Date() }
})

module.exports = mongoose.model('PulsoCardiaco', PulsoCardiacoSchema)