# HollowKnight-krlo-generator

To run locally, install dev-dependencies and generate the parser:
```bash
npm install --include=dev
npm run make-parser
```

To run locally

```bash
npm run serve
```

This starts the development server, listening on port 8080.

## Deploy

I use [gh-pages](https://www.npmjs.com/package/gh-pages). To deploy just run

```bash
npm run deploy
```

This creates the branch directly on GitHub.

# Skip difficulties

- easy: only very basic and well-known skips, such as the shade skip to blue
  lake
- normal: roughly skips used in the Kronk% category
- hard: harder skips (e.g. clawless cdash or shade cloak). This logic is mostly
  untested and may be very broken

Currently slopeball is never in logic, but I could add a difficulty and/or flag
in the future.

## TODO

- make a favicon
- KRLO: explain what skip difficulties are in the webpage
- KRLO: make a map of the levers with names
- make a script that automatically builds `credits.html` from `credits.md`
