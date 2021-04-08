export default function lazyValue(function_) {
	let isCalled = false;
	let result;

	return () => {
		if (!isCalled) {
			isCalled = true;
			result = function_();
		}

		return result;
	};
}
