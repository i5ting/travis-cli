#!/usr/bin/env node

var fs = require('fs')
var filePath = __dirname
var currentPath = process.cwd()
var cfg = require('get-git-info')(currentPath)
/**
 * Module dependencies.
 */

var program = require('commander')

program
  .version(require('./package.json').version)
  .option('-i, --init', 'init default .travis.yml')
  .option('-b, --badge', 'get badge for README.md')
  .option('-n, --npm', 'get npm badge .travis.yml')
  .option('-g, --gitter', 'get gitter badge for README.md')
  .option('-t, --travis', 'get travis badge for README.md')
  .option('-s, --standard', 'get standard badge for README.md')
  .option('-c, --codecov', 'get codecov badge for README.md')
  .parse(process.argv)

if (program.init) {
  fs.createReadStream(filePath + '/travis.yml').pipe(fs.createWriteStream(currentPath + '/.travis.yml'))
  console.log('init complete!')
}

if (program.badge) {
  console.log('[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/' + cfg.user + '/' + cfg.project + '?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)')
  console.log('[![NPM version](https://img.shields.io/npm/v/' + cfg.project + '.svg?style=flat-square)](https://www.npmjs.com/package/' + cfg.project + ')')
  console.log('[![Build](https://travis-ci.org/' + cfg.user + '/' + cfg.project + '.svg?branch=master)](https://travis-ci.org/' + cfg.user + '/' + cfg.project + ')')
  console.log('[![codecov.io](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '/coverage.svg?branch=master)](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '?branch=master)')
}

if (program.codecov) {
  console.log('[![codecov.io](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '/coverage.svg?branch=master)](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '?branch=master)')
}

if (program.npm) {
  console.log('[![NPM version](https://img.shields.io/npm/v/' + cfg.project + '.svg?style=flat-square)](https://www.npmjs.com/package/' + cfg.project + ')')
}

if (program.gitter) {
  console.log('[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/' + cfg.user + '/' + cfg.project + '?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)')
}

if (program.travis) {
  console.log('[![Build](https://travis-ci.org/' + cfg.user + '/' + cfg.project + '.svg?branch=master)](https://travis-ci.org/' + cfg.user + '/' + cfg.project + ')')
}

if (program.standard) {
  console.log('[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)')
}

// console.log('Usages: travis -i or travis -b')
