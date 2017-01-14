import test from 'ava';
import m from './';

test('main', t => {
	let i = 0;
	const val = m(() => ++i);
	t.is(val(), 1);
	t.is(val(), 1);
	t.is(val(), 1);
});

test('works with `null`', t => {
	let i = 0;

	const val = m(() => {
		i++;
		return null;
	});

	t.is(val(), null);
	t.is(val(), null);
	t.is(i, 1);
});
