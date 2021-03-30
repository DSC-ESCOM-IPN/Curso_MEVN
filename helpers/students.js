const fs = require('fs');

const studentsCtrl = {};

studentsCtrl.writeStudent = (pathFile, student, res) => {
  let students;
  if (fs.existsSync(pathFile)) {
    students = require(pathFile);
    students.push(student);
  } else {
    students = [];
    students.push(student);
  }
  fs.writeFile(pathFile, JSON.stringify(students), (err) => {
    if (err) throw err;
    console.log('Estudiante agregado');
    res.status(201).json(students);
  });
};

studentsCtrl.readStudent = (pathFile, id) => {
  const students = JSON.parse(fs.readFileSync(pathFile));
  return students[id];
};

studentsCtrl.readStudents = (pathFile) => {
  const students = JSON.parse(fs.readFileSync(pathFile));
  return students;
};


module.exports = studentsCtrl;
