const User = require('../models/User');
const passport = require('passport');

const userController = {};

userController.renderSignUpForm = (req, res) => res.render('users/signup');

userController.renderSigninForm = (req, res) => res.render('users/signin');

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

userController.signinGoogle = (passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

userController.redirectGoogle = passport.authenticate('google', {
  successRedirect: '/student/all',
  failureRedirect: '/user/signin',
});

userController.logout = (req, res) => {
  req.logout();
  res.redirect('/');
  // res.redirect('https://mail.google.com/mail/u/0/?logout&hl=en');
};

module.exports = userController;
