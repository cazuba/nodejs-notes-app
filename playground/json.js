const obj = {
    name: 'Charlie'
};

const stringObj = JSON.stringify(obj);

console.log(typeof stringObj, "\n", stringObj);
module.export = {
    mock: stringObj
};