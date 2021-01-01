# lazy-value

> Create a [lazily evaluated](https://en.wikipedia.org/wiki/Lazy_evaluation) value

Useful when a value is expensive to generate, so you want to delay the computation until the value is needed. For example, improving startup performance by deferring nonessential operations.


## Install

```
$ npm install lazy-value
```


## Usage

```js
const lazyValue = require('lazy-value');

const value = lazyValue(() => expensiveComputation());

app.on('user-action', () => {
	doSomething(value());
});
```


## API

### lazyValue(fn)

#### fn

Type: `Function`

Expected to return a value.


## Related

- [define-lazy-prop](https://github.com/sindresorhus/define-lazy-prop) - Define a lazily evaluated property on an object
- [import-lazy](https://github.com/sindresorhus/import-lazy) - Import a module lazily
- [p-lazy](https://github.com/sindresorhus/p-lazy) - Create a lazy promise


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
