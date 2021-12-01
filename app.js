const validator = require('validator')
const notes = require('./notes.js')
const yargs = require('yargs')

yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Add a note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Enter body of the note',
            demandOption: true
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove a note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
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

yargs.parse()