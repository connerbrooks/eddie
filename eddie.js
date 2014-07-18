var SerialPort = require("serialPort").SerialPort;
var serialPort = new SerialPort("/dev/tty.usbserial-A100OPQM", {
  baudrate: 115200
}, false);

serialPort.open(function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });
  serialPort.write("VER", function(err, results) {
    console.log('err ' + err);
    console.log('results ' + results);
  });
});
