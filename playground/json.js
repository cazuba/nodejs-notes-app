// const obj = {
//     name: 'Charlie'
// };

// const stringObj = JSON.stringify(obj);

// console.log(typeof stringObj, "\n", stringObj);
// module.export = {
//     mock: stringObj
// };

const personString = '{"name":"Charlie", "age":25}';
const person = JSON.parse(personString);

console.log(typeof person, "\n", person);