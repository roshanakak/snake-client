const readline = require('readline');
const {keyboard} = require('./constants');

const readLineObj = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  readInput();

  return stdin;
};

const handleUserInput = function() {

  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log('Ending the game!');
      process.exit();
    }
  });
};

const readInput = function() {
  readLineObj.question(' ', input => {
    if (input !== 'Ending the game!') {
      if (keyboard[input]) move(input);
      else if (input === 'x' || input === 'X') say('y');
      readInput();
    }
  });
};

const say = function(sentence) {
  connection.write(`Say: ${sentence}`);
};

const move = function(moveDirection) {
  connection.write(keyboard[moveDirection]);
};

module.exports = setupInput;

