
/*jshint esversion: 6 */
// This above line needs no config file like `.jshintrc` in the project root directory

const log = require('./logger');
// `const` type has been used instead of `let` to avoid accidental setting value like this & get exception error:
// log = 1;
 
console.log(log);

log("abhijit");