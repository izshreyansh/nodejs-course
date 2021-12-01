const fs = require('fs');
const { array } = require('yargs');

const getNotes = function () {
    return "This is a sample note."
}

const addNote = function(title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note) {
        return note.title == title 
    });

    if(duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);


        console.log("New note stored.")
    } else {
        console.log('Note: ' + title + ' taken!')
    }
}

const removeNote = function(title) {
    const notes = loadNotes();

    const notesToKeep = notes.filter(function(note) {
        return note.title != title 
    });
        
    saveNotes(notesToKeep);

    console.log("A note is removed.")
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString(); 
        return JSON.parse(dataJSON);    
    } catch (e) {
        return [];
    }    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}