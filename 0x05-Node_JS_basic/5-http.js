// a more complex HTTP server using
//
const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const HOST = 'localhost';


const app = http.createServer();

const DB = process.argv.length > 2 ? process.argv[2]: 'database.csv';


const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
      .catch((err) => {
        responseParts.push(err instanceof Error ? err.message: err.toString());
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
      });

    },
  },
]


app.on('request', (req, res) => {
  for (let routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      return;
    }
  }
  res.statusCode = 404;
  res.setHeader('Content-TYpe', 'text/plain');
  res.end('Not Found');
});

app.listen(PORT, HOST);

module.exports = app;
