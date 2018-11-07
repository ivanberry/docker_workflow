"use strict";

// had enabled by egg
// exports.static = true;

exports.validate = {
	enabled: true,
	package: "egg-validate"
};

exports.mongoose = {
	enabled: true,
	package: "egg-mongoose"
};

exports.reactssr = {
	enable: true,
	package: 'egg-view-react-ssr',
};
