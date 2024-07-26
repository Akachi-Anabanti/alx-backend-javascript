// a small simple HTTP server
//

const http = require('http');

const HOST = 'localhost';
const PORT = 1245;

const app = http.createServer();

app.on('request', (req, res) => {
  const responseText = 'Hello Holberton School!';
  res.setHeader('Content-Length', responseText.length);
  res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST);

module.exports = app;
