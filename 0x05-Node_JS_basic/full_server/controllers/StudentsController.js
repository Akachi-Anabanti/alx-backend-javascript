// Student Controller
import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const reportParts = ['This is the list of our students'];

    readDatabase(dataPath)
      .then((report) => {
        Object.entries(report).forEach(([field, { count, list }]) => {
          reportParts.push(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
        });
        res.status(200).send(reportParts.join('\n'));
      })
      .catch((err) => {
        res.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(dataPath)
      .then((report) => {
        const students = report[major];
        res.status(200).send(`List: ${students.list.join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
