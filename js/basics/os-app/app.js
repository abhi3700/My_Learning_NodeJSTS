/*jshint esversion:6*/
const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// As per ES6
console.log(`Totol Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

