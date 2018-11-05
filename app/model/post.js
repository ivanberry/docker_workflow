module.exports = app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const PostScheam = new Schema({
		title: { type: String },
		content: { type: String }
	});

	return mongoose.model("Post", PostScheam);
};
