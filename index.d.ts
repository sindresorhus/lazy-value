/**
Create a [lazily evaluated](https://en.wikipedia.org/wiki/Lazy_evaluation) value.

@param fn - Expected to return a value.

@example
```
import lazyValue from 'lazy-value';

const value = lazyValue(() => expensiveComputation());

app.on('user-action', () => {
	doSomething(value());
});
```
*/
export default function lazyValue<T extends () => unknown>(function_: T): T;
