const validator = require('validator')
const getNotes = require('./notes.js')
const yargs = require('yargs')

yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note.')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Remove a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing Notes',
    handler: function () {
        console.log('Listing all notes.')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Read a note')
    }
})

console.log(yargs.argv)