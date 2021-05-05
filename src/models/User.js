const mongoose = require("mongoose");
const { Schema } = mongoose;
const Post = require("../models/Post");

const UserSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	userType: { type: Number, required: true },
	isRegular: { type: Boolean, required: true },
	cellphone: { type: Number, required: false },
	posts: { type: [Schema.Types.ObjectId], ref: "Post", default: []},
});

module.exports = mongoose.model("User", UserSchema);
