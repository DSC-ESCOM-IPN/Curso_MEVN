const fs = require('fs');

const studentsCtrl = {};

studentsCtrl.writeStudent = (pathFile, student, res) => {
  let students = [];
  if (fs.existsSync(pathFile)) {
    students = require(pathFile);
    console.log(students);
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


module.exports = studentsCtrl;
