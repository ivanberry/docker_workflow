const Controller = require("egg").Controller;

const createRule = {
	accesstoken: "string",
	title: "string",
	tab: "string",
	content: "string"
};

class TopicController extends Controller {
	async create() {
		const ctx = this.ctx;
		ctx.validate(createRule, ctx.request.body);

		const { title, content } = ctx.request.body;

		const id = await ctx.model.Post.create({ title, content });
		// const id = await ctx.service.topics.create(ctx.request.body);

		ctx.body = {
			topic_id: id
		};

		ctx.status = 201;
	}

	async index() {
		const ctx = this.ctx;
		ctx.body = "Hello zyyyy egg.js";
		ctx.status = 200;
	}
}

module.exports = TopicController;
