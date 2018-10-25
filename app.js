#!/usr/bin/env node
console.log('App initialized...');

const yargs = require('yargs');
const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes');

const { argv } = yargs;
const command = argv._[0];

switch(command) {
    case 'add': 
        notes.addNote(argv.title, argv.body);
        break;
    case 'list': 
        notes.getAll();
        break;
    case 'read': 
        notes.getNote(argv.title);
        break;
    case 'remove': 
        notes.removeNote(argv.title);
        break;
    default: 
        console.log('Command not found...')
        break;
}