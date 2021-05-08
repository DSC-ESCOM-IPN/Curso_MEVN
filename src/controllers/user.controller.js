const chalk = require('chalk');
const User = require('../models/User');
const Post = require('../models/Post');

const userController = {};

userController.getUsers = async (req, res) => {
  const users = await User.find({}).lean();
  res.render('index', {students: users, isRegularView: false});
  // res.json(users);
};

userController.getRegulars = async (req, res) => {
  const users = await User.find({isRegular: true}).lean();
  res.render('index', {students: users, isRegularView: true});
};

userController.getForm = (req, res) => {
  res.render('form');
};

userController.createUser = (req, res) => {
  const {name, email, password, avg} = req.body;
  const userType = 1;
  const isRegular = avg >= 6.0;
  const newUser = new User({
    name,
    email,
    password,
    userType,
    isRegular,
  });
  newUser
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

userController.deleteUser = (req, res) => {
  const {id} = req.params;
  User.findByIdAndRemove(id)
      .then((user) => {
        console.log(`${user.name} was deleted`);
        res.redirect('/user/all');
      })
      .catch((err) => {
        console.log(chalk.bold.red('Error:'), err);
        res.status(400).json({status: 'Error'});
      });
};

// userController.getUsers = async (req, res) => {
//   const users = await User.find({}).lean();
//   console.log(users);
//   res.render('students', {students: users});
//   // res.json(users);
// };

userController.getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.find({_id: id}).lean();
  res.render('form', {user: user[0]});
  // res.json(user);
};

userController.getFormPost = async (req, res) => {
  const id = req.params.id;
  const user = await User.find({_id: id}).lean();
  res.render('formPost', {id: user[0]._id});
};


userController.updateUser = async (req, res) => {
  const {id} = req.params;
  const {name, email, password, avg} = req.body;
  const isRegular = avg >= 6.0;
  User.findByIdAndUpdate(id, {
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

userController.getPosts = async (req, res) => {
  const {id} = req.params;
  const posts = await User.findById(id).populate('posts');
  res.json(posts);
};

userController.getPosts = async (req, res) => {
  const posts = await Post.find().lean();
  res.render('posts', {posts: posts});
};

userController.createPost = async (req, res) => {
  const {id} = req.params;
  const {text} = req.body;
  const newPost = new Post({text});
  newPost.save().catch((err) => {
    console.log(chalk.bold.red('Error:'), err);
    res.status(400).json({status: 'Error'});
  });
  User.findByIdAndUpdate(id, {$addToSet: {posts: newPost._id}})
      .then(() => {
        console.log('Post created');
        res.redirect('/');
      })
      .catch((err) => {
        console.log(chalk.bold.red('Error:'), err);
        res.status(400).json({status: 'Error'});
      });
};

module.exports = userController;
