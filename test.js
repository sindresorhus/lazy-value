import test from 'ava';
import lazyValue from './index.js';

test('main', t => {
	let index = 0;
	const value = lazyValue(() => ++index);
	t.is(value(), 1);
	t.is(value(), 1);
	t.is(value(), 1);
});

test('works with `null`', t => {
	let index = 0;

	const value = lazyValue(() => {
		index++;
		return null;
	});

	t.is(value(), null);
	t.is(value(), null);
	t.is(index, 1);
});
