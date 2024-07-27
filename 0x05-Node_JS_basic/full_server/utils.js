// utils file

const fs = require('fs');

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }

  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const lines = data.toString('utf-8').trim().split('\n');
        const students = lines.slice(1);

        const fields = {};

        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = { count: 0, list: [] };
          }
          fields[field].count += 1;
          fields[field].list.push(firstName);
        });
        resolve(fields);
      }
    });
  }
});

module.exports = readDatabase;
