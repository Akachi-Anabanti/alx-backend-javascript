// a more complex HTTP server using
//
const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer();

const DB = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      if (data) {
        const reportParts = [];

        const lines = data.toString('utf-8').trim().split('\n');

        const students = lines.slice(1);

        reportParts.push(`Number of students: ${students.length}`);

        const fields = {};

        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = { count: 0, list: [] };
          }
          fields[field].count += 1;
          fields[field].list.push(firstName);
        });

        Object.entries(fields).forEach(([field, { count, list }]) => {
          reportParts.push(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
        });

        resolve(reportParts.join('\n'));
      }
    });
  }
});

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
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
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
