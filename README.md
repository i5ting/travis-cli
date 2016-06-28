# travis-cli

a cli tool for travis-cli 

[![Build](https://travis-ci.org/i5ting/travis-cli.svg?branch=master)](https://travis-ci.org/i5ting/travis-cli)
[![codecov.io](https://codecov.io/github/i5ting/travis-cli/coverage.svg?branch=master)](https://codecov.io/github/i5ting/travis-cli?branch=master)

## Install

```
$ [sudo]npm i -g 
```

## Usages

```
$ travis -h

  Usage: travis [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -i, --init     init default .travis.yml
    -b, --badge    get badge for README.md
```

create .travis.yml

```
travis -i
```

get badge for README.md


```
travis -b
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本cli

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
