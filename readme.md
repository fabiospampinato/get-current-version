# Get Current Version

Get the version of the currently executing bin.

This is meant to be used in combination with [`tiny-updater`](https://github.com/fabiospampinato/tiny-updater) or similar, in order to get the version of the currently executing bin very conveniently, without importing a "package.json" and without hard-coding the version number yourself.

## Install

```sh
npm install --save get-current-version
```

## Usage

You should have something like this in your bin app:

```ts
import getCurrentVersion from 'get-current-version';

console.log ( getCurrentVersion () ); // 1.0.0
```

Then executing the bin would produce this:

```
> my-bin
< 1.0.0
```

Basically it detects which entrypoint file is being executed and retrieves its version.

## License

MIT © Fabio Spampinato
