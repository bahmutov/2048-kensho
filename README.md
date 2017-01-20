# 2048-kensho

[Play 2048-kensho](http://glebbahmutov.com/2048-kensho/)

![2048-kensho screenshot](2048-kensho.png)

[![Build status][ci-image] ][ci-url]

Every page reload reshuffles the team numbers

* build with `npm run build`
* run the website locally: `npm start` then open the website
* push the built website: `npm run push`

## E2E testing

Uses [Cypress](https://www.cypress.io/).

```sh
npm install -g cypress-cli
cypress install
cypress open
```

Then login with GitHub account (make sure to get invite from
`https://www.cypress.io/` by asking on `https://gitter.im/cypress-io/cypress`)

To run against deployed website use `npm run test-deployed`.

## Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/2048-kensho/issues) on Github

[ci-image]: https://travis-ci.org/bahmutov/2048-kensho.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/2048-kensho
