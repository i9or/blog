# Blog

Yet another personal blog engine, written for no real reason from scratch.

## Setup

First dependencies needs to be installed:

```commandline
npm ci
```

Then an empty DB should be created and migrations applied:

```commandline
touch ./db/development.db
npm run db:migrate
```

## Running

Development:

```commandline
npm run watch
```

Production:

```commandline
npm run build
npm run start
```

## Testing

Run:

```commandline
npm run test
```

With coverage:

```commandline
npm run test:coverage
```
