console.log('App initialized...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

const user = os.userInfo();

// Lodash samples
console.log(_.isString(true));
console.log(_.isString('Charlie'));

fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err) => {
    if(err) {
        throw err;
    }
    fs.readFile('greetings.txt', (err, data) => {
        if(err) {
            throw err;
        }
        console.log(data);
    });
});

const filteredArray = _.uniq(['Charlie', 1, 'Charlie', 2, 3, 'CharlieLorem']);
console.log(filteredArray);
