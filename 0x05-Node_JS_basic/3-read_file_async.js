const fs = require('fs');

const countStudent = async (filePath) => {
  try {
    const content = await fs.promises.readFile(filePath, 'utf-8');
    const data = content.toString('utf-8').trim();

    const lines = data.split('\n');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

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
      console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudent;
