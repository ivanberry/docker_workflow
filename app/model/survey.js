module.exports = app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const SurveyScheam = new Schema({
		version: { type: Number },
		status: {type: String},
		surveyDetail: {
			id: Number,
			code: String
		},
		flowList: [{
			id: Number,
			flowType: String,
			outputType: String,
		}],
		questionList: [],
		logicNodeList: [],
		lastAnswer: [],
		answer: []
	});

	return mongoose.model("Survey", SurveyScheam);
};
