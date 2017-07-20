var PORT = 41443;

var net = require("net");

var s = new net.Socket();

s.on("data", function(data) {
  console.log("data received:", data);
});
s.connect(PORT, function(){
    s.write("hello!");
});
