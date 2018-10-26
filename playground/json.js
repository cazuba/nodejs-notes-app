// const obj = {
//     name: 'Charlie'
// };

// const stringObj = JSON.stringify(obj);

// console.log(typeof stringObj, "\n", stringObj);
// module.export = {
//     mock: stringObj
// };

// const personString = '{"name":"Charlie", "age":25}';
// const person = JSON.parse(personString);

// console.log(typeof person, "\n", person);

const fs = require('fs');

const originalNote = {
    title: 'Lorem Ipsum',
    body: 'Dolor Sit Amet Consectetum'
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
console.log('typeof noteString: ', typeof noteString, "\n", noteString);

const note = JSON.parse(noteString);
console.log(typeof note, "\n", note, note.title);