const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');

router.use( function( req, res, next ) {
  if ( req.query._method == 'DELETE' ) {
    req.method = 'DELETE';
    req.url = req.path;
  }
  if ( req.query._method == 'PUT' ) {
    req.method = 'PUT';
    req.url = req.path;
  }
  next();
});

router.post('/user/', user.createUser);
router.delete('/user/:id', user.deleteUser);
router.get('/user/all/', user.getUsers);
router.put('/user/:id', user.updateUser);
router.get('/user/getUser/:id', user.getUser);
router.get('/posts/form/:id', user.getFormPost);
// router.get('/user/getUser/:id', user.getUser);
router.get('/user/regulars/', user.getRegulars);
router.post('/posts/addPost/:id', user.createPost);
router.get('/posts/', user.getPosts);


module.exports = router;
