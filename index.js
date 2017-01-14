'use strict';
module.exports = fn => {
	let called = false;
	let ret;

	return () => {
		if (!called) {
			called = true;
			ret = fn();
		}

		return ret;
	};
};
