const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");

router.post("/user/", user.createUser);
router.delete("/user/:id", user.deleteUser);
router.get("/user/all/", user.getUsers);
router.get("/user/regulars/", user.getRegulars);
router.put("/user/:id", user.updateUser);
router.get("/user/posts/:id", user.getPosts);
router.post("/user/posts/:id", user.createPost);

module.exports = router;
