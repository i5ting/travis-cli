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
  .parse(process.argv);
 

if (program.init) {
  fs.createReadStream(file_path + '/travis.yml').pipe(fs.createWriteStream(current_path + '/.travis.yml'))
  return console.log('init complete!')
}

if (program.badge) {
  var cfg = require('get-git-info')(current_path);
  // console.log(cfg)
  //{ user: 'i5ting', project: 'get-git-info' }
  return console.log('[![Build](https://travis-ci.org/' + cfg.user + '/' + cfg.project + '.svg?branch=master)](https://travis-ci.org/' + cfg.user + '/' + cfg.project + ')')
}

console.log('Usages: travis -i or travis -b')