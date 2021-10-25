const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

console.log(
    validator.isURL('http://sh')
)

console.log(
    chalk.bold.red('No Drivers are available.')
)

console.log(
    chalk.bold.yellow('Taxi is available right now.')
)