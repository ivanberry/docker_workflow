"use strict";
const path = require('path');

module.exports = appInfo => {
	const config = (exports = {});

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + "_1541232427571_5700";

	exports.view = {
		defaultViewEngine: "nunjucks",
		mapping: {
			".tpl": "nunjucks"
		}
	};

	exports.news = {
		pageSize: 5,
		serverUrl: "https://hacker-news.firebaseio.com/v0"
	};

	exports.security = {
		csrf: false
	};

	exports.mongoose = {
		client: {
			url: "mongodb://db:27017/example",
			options: {
				useNewUrlParser: true
			}
		}
	};

	// add your config here
	config.middleware = ["errorHandler"];
	config.errorHandler = { match: "/api" };

	return config;
};
