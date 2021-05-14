const chalk = require('chalk');
const Student = require('../models/Student');
const Post = require('../models/Post');

const studentController = {};

studentController.getStudents = async (req, res) => {
  const students = await Student.find({}).lean();
  console.log(students);
  res.render('index', {students: students, isRegularView: false});
  // res.json(users);
};

studentController.getRegulars = async (req, res) => {
  const students = await Student.find({isRegular: true}).lean();
  res.render('index', {students: students, isRegularView: true});
};

studentController.getForm = (req, res) => {
  res.render('form');
};

studentController.createStudent = (req, res) => {
  const {name, email, password, avg} = req.body;
  const userType = 1;
  const isRegular = avg >= 6.0;
  const newStudent = new Student({
    name,
    email,
    password,
    userType,
    isRegular,
  });
  newStudent
      .save()
      .then(() => {
        console.log('User saved');
        res.redirect('/');
      })
      .catch((err) => {
        console.log(chalk.bold.red('Error:'), err);
        res.status(400).json({status: 'Error'});
      });
};

studentController.deleteStudent = (req, res) => {
  const {id} = req.params;
  Student.findByIdAndRemove(id)
      .then((student) => {
        console.log(`${student.name} was deleted`);
        res.redirect('/student/all');
      })
      .catch((err) => {
        console.log(chalk.bold.red('Error:'), err);
        res.status(400).json({status: 'Error'});
      });
};

studentController.getStudent = async (req, res) => {
  const id = req.params.id;
  const user = await Student.find({_id: id}).lean();
  res.render('form', {user: user[0]});
  // res.json(user);
};

studentController.getFormPost = async (req, res) => {
  const id = req.params.id;
  const user = await Student.find({_id: id}).lean();
  res.render('formPost', {id: user[0]._id});
};


studentController.updateStudent = async (req, res) => {
  const {id} = req.params;
  const {name, email, password, avg} = req.body;
  const isRegular = avg >= 6.0;
  Student.findByIdAndUpdate(id, {
    name,
    email,
    password,
    isRegular,
  }).then((user) => {
    console.log(`${user.name} was updated`);
    res.status(200).json({status: 'OK'});
  }).catch((err) => {
    console.log(chalk.bold.red('Error:'), err);
    res.status(400).json({status: 'Error'});
  });
};

studentController.getPosts = async (req, res) => {
  const posts = await Post.find().lean();
  res.render('posts', {posts: posts});
};

studentController.createPost = async (req, res) => {
  const {id} = req.params;
  const {text} = req.body;
  const newPost = new Post({text});
  newPost.save().catch((err) => {
    console.log(chalk.bold.red('Error:'), err);
    res.status(400).json({status: 'Error'});
  });
  Student.findByIdAndUpdate(id, {$addToSet: {posts: newPost._id}})
      .then(() => {
        console.log('Post created');
        res.redirect('/');
      })
      .catch((err) => {
        console.log(chalk.bold.red('Error:'), err);
        res.status(400).json({status: 'Error'});
      });
};

module.exports = studentController;
