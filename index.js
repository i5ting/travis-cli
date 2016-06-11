#!/usr/bin/env node

var fs = require('fs')
var file_path = __dirname;
var current_path = process.cwd();
/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version('0.0.1')
  .option('-i, --init', 'init default .travis.yml')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);
 

if (program.init) {

  fs.createReadStream(file_path + '/travis.yml').pipe(fs.createWriteStream(current_path + '/.travis.yml'))
  return console.log('init complete!')
}


