const readline = require('readline');

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function() {
  
  const readLineObj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readLineObj.on('SIGINT', () => {
    readLineObj.write('Ending the game!\n');
    readLineObj.close();
  });
};

module.exports = setupInput;