import test from 'ava';
import lazyValue from '.';

test('main', t => {
	let i = 0;
	const val = lazyValue(() => ++i);
	t.is(val(), 1);
	t.is(val(), 1);
	t.is(val(), 1);
});

test('works with `null`', t => {
	let i = 0;

	const val = lazyValue(() => {
		i++;
		return null;
	});

	t.is(val(), null);
	t.is(val(), null);
	t.is(i, 1);
});
