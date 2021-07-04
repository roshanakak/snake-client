// require the net module
const net = require('net');

// define your port
const port = 8080;

// createConnection with net module 
const client = net.createConnection({
    port: port,
    host: 'localhost'
})
// and parse object with port and host

// set the encoding to utf-8
client.setEncoding('utf8');

client.on("connect", function(){
    console.log(`client has connected`)
})

client.on("data", function(message){
    console.log(`server has said: ${message}`)
})

// console log a message when connection is established using the on connect handler

// console log a message when a message is received using the on data handler

// console log a message when a the connection is ended using the on end handler

// send data to server using process.stdin.on(data) and client.write
