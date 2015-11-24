var data = "";

var serialport = require('serialport');
var portName = '/dev/tty.usbmodem1421';
var sp = new serialport.SerialPort(portName, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    parser: serialport.parsers.readline("\r\n")
});

sp.on('data', function(input) {
    data = input;
});

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(data);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});