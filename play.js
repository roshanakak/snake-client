const connect = require("./client");
const setupInput = require("./input");
require('events').EventEmitter.defaultMaxListeners = 0;

console.log("Connecting ...");
let conn = connect('RA');


setupInput(conn);
