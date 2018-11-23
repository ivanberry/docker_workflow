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
			logicNodeId: Number,
			questionId: Number,
			isRequired: Boolean,
			nextContent: {
				logicNodeId: Number,
				questionId: Number,
				flowType: String
			},
			questionContent: {},
			logicNodeContent: {}
		}],
		lastAnswer: {},
		answer:{}
	});

	return mongoose.model("Survey", SurveyScheam);
};
