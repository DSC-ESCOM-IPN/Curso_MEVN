const { ObjectID } = require("bson");
const chalk = require("chalk");
const mongo = require('../database');
const db = mongo.getDb();
const userCol = db.collection('users');
const postCol = db.collection('posts');

const userController = {};

userController.getUsers = (req, res) => {
    userCol.find().toArray()
        .then(results => {
            console.log(results);
            res.json(results);
        })
        .catch(error => console.error(error));
};


userController.createUser = (req, res) => {
    if (req.body.birth)
        req.body.birth = new Date(req.body.birth);
    userCol.insertOne(req.body)
        .then(result => {
            console.log(result)
            res.status(200).json({ status: "OK" });
        })
        .catch((err) => {
            console.log(chalk.bold.red("Error:"), err);
            res.status(400).json({ status: "Error" });
        });
};

userController.deleteUser = (req, res) => {
    const { id } = req.params;
    userCol.deleteOne({ "_id": new ObjectID(id) })
        .then((user) => {
            console.log(`${user.name} was deleted`);
            res.status(200).json({ status: "OK" });
        })
        .catch((err) => {
            console.log(chalk.bold.red("Error:"), err);
            res.status(400).json({ status: "Error" });
        });
};

userController.getRegulars = (req, res) => {
    userCol.find({ isRegular: true }).toArray()
        .then(results => {
            console.log(results);
            res.json(results);
        })
        .catch(error => console.error(error));
};

userController.updateUser = (req, res) => {
    const { id } = req.params;
    userCol.updateOne({ "_id": new ObjectID(id) }, { "$set": req.body })
        .then((result) => {
            console.log(`The user was updated`);
            res.status(200).json({ status: "OK" });
        })
        .catch((err) => {
            console.log(chalk.bold.red("Error:"), err);
            res.status(400).json({ status: "Error" });
        });
};

userController.getPosts = (req, res) => {
    const { id } = req.params;
    userCol.findOne({ "_id": new ObjectID(id) }, { projection: { posts: true, _id: false } })
        .then(results => {
            console.log(results);
            res.json(results);
        })
        .catch(error => console.error(error));
};

userController.createPost = (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    var postId = null;
    postCol.insertOne({ "text": text })
        .then(result => {
            console.log(result)
            postId = result.insertedId;
        })
        .catch((err) => {
            console.log(chalk.bold.red("Error:"), err);
            res.status(400).json({ status: "Error" });
            return;
        });
    userCol.updateOne(
        { "_id": new ObjectID(id) },
        {
            "$push": {
                "posts": new ObjectID(postId)
            }
        })
        .then(() => {
            console.log("Post created");
            res.status(200).json({ status: "OK" });
        })
        .catch((err) => {
            console.log(chalk.bold.red("Error:"), err);
            res.status(400).json({ status: "Error" });
        });
};

module.exports = userController;