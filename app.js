console.log('App initialized...');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes');

const Command = process.argv[2];

switch(Command) {
    case 'add': 
        console.log('Adding notes...')
        break;
    case 'list': 
        console.log('Listing notes...')
        break;
    case 'read': 
        console.log('Reading notes...')
        break;
    default: 
        console.log('Command not found...')
        break;
}