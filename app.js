#!/usr/bin/env node
console.log('App initialized...');

const yargs = require('yargs');
const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const { argv } = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note by title', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help();
const command = argv._[0];

switch(command) {
    case 'add': 
        const note = notes.addNote(argv.title, argv.body);
        if (note) {
            console.log('Note created');
            notes.logNote(note);
        } else {
            console.log(`No title taken`);
        }
        break;
    case 'list': 
        const list = notes.getAll();
        console.log(`Printing ${list.length} note(s)`);
        list.forEach(note => notes.logNote(note));
        break;
    case 'read': 
        const found = notes.getNote(argv.title);
        if (found) {
            console.log('Note found!!');
            notes.logNote(found);
        } else {
            console.log('Note not found');
        }
        break;
    case 'remove': 
        const removed = notes.removeNote(argv.title);
        if (removed) {
            console.log('Note removed!', removed);
        } else {
            console.log('Note not found');
        }
        break;
    default: 
        console.log('Command not found...')
        break;
}