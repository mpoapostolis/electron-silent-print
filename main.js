const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method == 'POST') {
    var body = '';
    req.on('data', data => {
      body += data;
      console.log(body);
    });
  }
  res.end();
});

server.listen(8000);
