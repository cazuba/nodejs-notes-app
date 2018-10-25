console.log('Notes initialized');

const addNote = (title, body) => {
    console.log('Adding new note...');
    return `${title} ${body}`;
};

const getAll = () => {
    console.log('Listing all notes...')
    return 'Getting all notes'
};

const getNote = (title) => {
    console.log(`Getting note ${title}...`)
    return 'Getting note'
};

const removeNote = (title) => {
    console.log(`Removing note ${title}...`)
    return 'Removing note'
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};