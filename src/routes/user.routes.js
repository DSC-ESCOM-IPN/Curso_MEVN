const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");

router.use( function( req, res, next ) {
    if ( req.query._method == 'DELETE' ) {
        req.method = 'DELETE';
        req.url = req.path;
    }       
    next(); 
});

router.post("/user/", user.createUser);
router.delete("/user/:id", user.deleteUser);
router.get("/user/all/", user.getUsers);
router.get("/user/regulars/", user.getRegulars);
router.put("/user/:id", user.updateUser);
router.get("/user/posts/:id", user.getPosts);
router.post("/user/posts/:id", user.createPost);

module.exports = router;
