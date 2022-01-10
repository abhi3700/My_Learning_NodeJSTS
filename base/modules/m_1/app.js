
/*jshint esversion: 6 */
// This above line needs no config file like `.jshintrc` in the project root directory

const logger = require('./logger');
// `const` type has been used instead of `let` to avoid accidental setting value like this & get exception error:
logger = 1;
 
console.log(logger);

logger.log("abhijit");