const chalk = require("chalk");
const User = require("../models/User");
const Post = require("../models/Post");

const userController = {};

userController.createUser = (req, res) => {
	const { name, email, password, userType, isRegular } = req.body;
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
			console.log("User saved");
			res.status(200).json({ status: "OK" });
		})
		.catch((err) => {
			console.log(chalk.bold.red("Error:"), err);
			res.status(400).json({ status: "Error" });
		});
};

userController.deleteUser = (req, res) => {
	const { id } = req.params;
	User.findByIdAndRemove(id)
		.then((user) => {
			console.log(`${user.name} was deleted`);
			res.status(200).json({ status: "OK" });
		})
		.catch((err) => {
			console.log(chalk.bold.red("Error:"), err);
			res.status(400).json({ status: "Error" });
		});
};

userController.getUsers = async (req, res) => {
	const users = await User.find({});
	console.log(users);
	res.json(users);
};

userController.getRegulars = async (req, res) => {
	const users = await User.find({ isRegular: true });
	res.json(users);
};

userController.updateUser = async (req, res) => {
	const { id } = req.params;
	const { cellphone } = req.body;
	User.findByIdAndUpdate(id, { cellphone })
		.then((user) => {
			console.log(`${user.name} was updated`);
			res.status(200).json({ status: "OK" });
		})
		.catch((err) => {
			console.log(chalk.bold.red("Error:"), err);
			res.status(400).json({ status: "Error" });
		});
};

userController.getPosts = async (req, res) => {
	const { id } = req.params;
	const posts = await User.findById(id).populate("posts");
	res.json(posts);
};

userController.createPost = async (req, res) => {
	const { id } = req.params;
	const { text } = req.body;
	const newPost = new Post({ text });
	newPost.save().catch((err) => {
		console.log(chalk.bold.red("Error:"), err);
		res.status(400).json({ status: "Error" });
	});
	User.findByIdAndUpdate(id, { $addToSet: { posts: newPost._id } })
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
