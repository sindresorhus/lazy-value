import {expectType} from 'tsd';
import lazyValue = require('.');

function expensiveComputation() {
	return 'foo';
}

expectType<() => string>(lazyValue(expensiveComputation));
expectType<string>(lazyValue(expensiveComputation)());
