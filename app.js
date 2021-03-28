const express =require('express');
const path = require('path');
const studentsCtrl = require('./helpers/student');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/student/:id', (req, res) => {
  const student = studentsCtrl.readStudent(
      path.join(__dirname, '/students.json'), req.params.id);
  res.send(student);
});

app.post('/user', (req, res) => {
  const {user, carrera} = req.body;
  const student = {nombre: user, carrera: carrera};
  studentsCtrl.writeStudent(
      path.join(__dirname + '/students.json'), student, res);
  // res.status(200).send('ok');
});

app.use((req, res) => {
  res.status(404).send('Error');
});

app.listen(3000, () => {
  console.log('El servidor esta en el puerto 3000');
});
