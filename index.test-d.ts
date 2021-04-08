import {expectType} from 'tsd';
import lazyValue from './index.js';

function expensiveComputation() {
	return 'foo';
}

expectType<() => string>(lazyValue(expensiveComputation));
expectType<string>(lazyValue(expensiveComputation)());
