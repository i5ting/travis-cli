#!/usr/bin/env node

var fs = require('fs')
var file_path = __dirname;
var current_path = process.cwd();
/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version(require('./package.json').version)
  .option('-i, --init', 'init default .travis.yml')
  .option('-b, --badge', 'get badge for README.md')
  .option('-n, --npm', 'get npm badge .travis.yml')
  .option('-g, --gitter', 'get gitter badge for README.md')
  .option('-t, --travis', 'get travis badge for README.md')
  .option('-c, --codecov', 'get codecov badge for README.md')
  .parse(process.argv);
 

if (program.init) {
  fs.createReadStream(file_path + '/travis.yml').pipe(fs.createWriteStream(current_path + '/.travis.yml'))
  return console.log('init complete!')
}

if (program.badge) {
  var cfg = require('get-git-info')(current_path);
  // console.log(cfg)
  //{ user: 'i5ting', project: 'get-git-info' }
  console.log('[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/' + cfg.user + '/' + cfg.project + '?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)')
  console.log('[![NPM version](https://img.shields.io/npm/v/' + cfg.project + '.svg?style=flat-square)](https://www.npmjs.com/package/' + cfg.project + ')')
  console.log('[![Build](https://travis-ci.org/' + cfg.user + '/' + cfg.project + '.svg?branch=master)](https://travis-ci.org/' + cfg.user + '/' + cfg.project + ')')
  console.log('[![codecov.io](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '/coverage.svg?branch=master)](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '?branch=master)')
}

if (program.codecov) {
  var cfg = require('get-git-info')(current_path);
  // console.log(cfg)
  //{ user: 'i5ting', project: 'get-git-info' }
   return console.log('[![codecov.io](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '/coverage.svg?branch=master)](https://codecov.io/github/' + cfg.user + '/' + cfg.project + '?branch=master)')
}

if (program.npm) {
  var cfg = require('get-git-info')(current_path);
  // console.log(cfg)
  //{ user: 'i5ting', project: 'get-git-info' }
   return console.log('[![NPM version](https://img.shields.io/npm/v/' + cfg.project + '.svg?style=flat-square)](https://www.npmjs.com/package/' + cfg.project + ')')
}

if (program.gitter) {
  var cfg = require('get-git-info')(current_path);
  // console.log(cfg)
  //{ user: 'i5ting', project: 'get-git-info' }
   return console.log('[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/' + cfg.user + '/' + cfg.project + '?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)')
}

if (program.travis) {
  var cfg = require('get-git-info')(current_path);
  // console.log(cfg)
  //{ user: 'i5ting', project: 'get-git-info' }
   return console.log('[![Build](https://travis-ci.org/' + cfg.user + '/' + cfg.project + '.svg?branch=master)](https://travis-ci.org/' + cfg.user + '/' + cfg.project + ')')
}

console.log('Usages: travis -i or travis -b')