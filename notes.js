console.log('Notes initialized');
const fs = require('fs');
const jsonFilename = 'notes-data.json';

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync(jsonFilename);
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync(jsonFilename, JSON.stringify(notes));
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    };
    const duplicateNotes = notes.filter(note => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    return fetchNotes();
};

const getNote = (title) => {
    const notes = fetchNotes();
    const note  = notes.filter(found => found.title === title);
    return note.length > 0 ? note[0] : null;
};

const removeNote = (title) => {
    const notes = fetchNotes();
    const removeId = notes.findIndex(note => note.title === title);
    if (removeId) {
        const deletedNote = notes[removeId];
        notes.splice(removeId, 1);
        saveNotes(notes);
        return deletedNote;
    }
    return false;
};

const logNote = note => {
    debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};