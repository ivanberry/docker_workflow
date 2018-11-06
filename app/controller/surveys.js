const Controller = require('egg').Controller;

class SurveyController extends Controller {
	async create() {
		const ctx = this.ctx;
		const {id} = await ctx.model.Survey.create(ctx.request.body);
		ctx.body = {
			survey_id: id
		};
		ctx.status = 201;
	}

	async show() {
		const ctx = this.ctx;
		const id = ctx.params.id;

		const _doc = await ctx.model.Survey.findById(id, '-_id -__v', {lean: true});

		ctx.body = {
			..._doc,
		};

		ctx.status = 200;
	}
}

module.exports = SurveyController;


