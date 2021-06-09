const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
require('dotenv').config();

const token = {};

token.generate = (id) => {
  return jwt.sign(
      {id},
      process.env.TOKEN_PASS,
      {expiresIn: '1d'},
  );
};

token.verify = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const recivedToken = authHeader && authHeader.split(' ')[1];
  if (recivedToken === undefined) {
    res.status(401).json({
      server: 'No estas autenticado',
    });
  }
  try {
    const token = recivedToken;
    const {id} = jwt.verify(token, process.env.TOKEN_PASS);
    const user = await User.findOne({_id: id});
    if (user === null) {
      res.status(403).json({
        server: 'Error',
      });
    } else if (user.token === null) {
      res.status(403).json({
        server: 'La sesion ha sido finalizada',
      });
    } else if (user.token !== token) {
      res.status(403).json({
        server: 'Ya hay una sesion activa',
      });
    } else {
      req.userId = id;
      next();
    }
  } catch (e) {
    console.log(e);
    if (e.name === 'TokenExpiredError') {
      res.status(403).json({
        server: 'La sesion ha expirado',
      });
    } else {
      res.status(403).json({
        server: 'Token corrupto',
      });
    }
  }
};

module.exports = token;
