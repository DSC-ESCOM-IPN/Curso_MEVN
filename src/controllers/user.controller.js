const User = require('../models/User');
const passport = require('passport');

const userController = {};

userController.renderSignUpForm = (req, res) => res.render('users/signup');

userController.singup = async (req, res) => {
  const {name, email, password, confirmPassword} = req.body;
  if (password !== confirmPassword) {
    res.render('users/signup', {error: 'Las contraseñas no coinciden'});
  } else {
    const emailUser = await User.findOne({email: email});
    if (emailUser) {
      res.redirect('/user/signup');
    } else {
      const newUser = new User({name, email, password});
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      res.redirect('/user/signin');
    }
  }
};

userController.renderSigninForm = (req, res) => res.render('users/signin');

userController.signin = passport.authenticate('local', {
  successRedirect: '/student/all',
  failureRedirect: '/user/signin',
});

userController.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

module.exports = userController;
