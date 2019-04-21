/**
Create a [lazily evaluated](https://en.wikipedia.org/wiki/Lazy_evaluation) value.

@param fn - Expected to return a value.

@example
```
import lazyValue = require('lazy-value');

const value = lazyValue(() => expensiveComputation());

app.on('user-action', () => {
	doSomething(value());
});
```
*/
declare function lazyValue<T extends () => unknown>(fn: T): T;

export = lazyValue;
