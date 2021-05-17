const express = require('express');
const router = express.Router();
const isAuthenticated = require('../utils/auth');
const student = require('../controllers/student.controller');

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

router.post('/student/', isAuthenticated, student.createStudent);
router.get('/student/addStudent/', isAuthenticated, student.getForm);
router.delete('/student/:id', isAuthenticated, student.deleteStudent);
router.get('/student/all/', isAuthenticated, student.getStudents);
router.put('/student/:id', isAuthenticated, student.updateStudent);
router.get('/student/getStudent/:id', isAuthenticated, student.getStudent);
router.get('/posts/form/:id', isAuthenticated, student.getFormPost);
router.get('/student/regulars/', isAuthenticated, student.getRegulars);
router.post('/posts/addPost/:id', isAuthenticated, student.createPost);
router.get('/posts/', student.getPosts);

module.exports = router;
