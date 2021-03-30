const router = require('express').Router();
const path = require('path');
const studentsCtrl = require('../helpers/students');

router.get('/', (req, res) => {
  const students = studentsCtrl.readStudents(
      path.join(__dirname, '..', '/students.json'));
  res.render('students', {students: students});
});

router.get('/:id', (req, res) => {
  const student = studentsCtrl.readStudent(
      path.join(__dirname, '..', '/students.json'), req.params.id);
  res.render('student', {student: student});
});

router.post('/add', (req, res) => {
  const {nombre, carrera} = req.body;
  studentsCtrl.writeStudent(path.join(__dirname, '..', '/students.json'),
      {name: nombre, career: carrera}, res);
});

module.exports = router;
