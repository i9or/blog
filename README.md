# Blog

Yet another personal blog static website generator, written for no real reason from scratch.

## Setup

Project uses Node.js 18.x. Once node is available, dependencies need to be installed:

```commandline
npm ci
```

## Running

### Development

```commandline
npm run watch
```

### Production

```commandline
npm run build
```

Static artifacts can be found in the `./build` directory.

## Testing

Run:

```commandline
npm run test
```

With coverage:

```commandline
npm run test:coverage
```
