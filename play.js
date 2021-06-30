const net = require("net");
const connect = require("./client");
const readline = require('readline');

const play = function (callback) {
  console.log("Connecting ...");
  conn = connect();
  
  
  conn.on('connect', () => {
    conn.write('Name: RA');
  });
  
  // conn.on('data', () => {
  //   conn.write('Move: up');
  // });
  
  
  let delay = 0;
  for (let i = 0; i < 2; i++) {
    delay += i * 50;
    setTimeout(() => {
      conn.on('data', () => {
        conn.write('Move: up');
      });
    }, delay);
  }

  // delay = 0;
  // for (let i = 0; i < 2; i++) {
  //   delay += i * 50;
  //   setTimeout(() => {
  //     conn.on('data', () => {
  //       conn.write('Move: right');
  //     });
  //   }, delay);
  // }

  // conn.on('data', () => {
  //   conn.write('Move: up');
  // });
}

//play();

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  
const readLineObj = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLineObj.on('SIGINT', () => {
  readLineObj.write('Ending the game!\n');
  readLineObj.close();
})
};

setupInput();
