Zetcore
=======

*Note:*
This version of zetcore is in beta. Use with care, and check back for frequent updates.

A pure, powerful core for your zetacoin project.

Zetcore is a complete, native interface to the Zetacoin network, and provides the core functionality needed to develop apps for zetacoin. Zetcore is forked from [Bitcore](https://github.com/bitpay/bitcore), a Bitcoin library.

#Principles

Zetacoin is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Zetacoin network allows for highly resilient zetacoin infrastructure, and the developer community needs reliable, open-source tools to implement zetacoin apps and services.

**Zetcore unchains developers from fallible, centralized APIs, and provides the tools to interact with the real Zetacoin network.**

#Get Started

Zetcore runs on [node](http://nodejs.org/), and can be installed via [npm](https://npmjs.org/):

```
npm install git://github.com/zbad405/zetcore.git#master
```

It is a collection of objects useful to zetacoin applications; class-like idioms are enabled via [Soop](https://github.com/bitpay/soop). In most cases, a developer will require the object's class directly. For instance:

```
var bitcore = require('bitcore');
var Address = bitcore.Address;
var Transaction = bitcore.Transaction;
var PeerManager = bitcore.PeerManager;
```

#Examples

Examples are provided [here](examples.md)
Build the examples by installing and running gulp:

```
npm install -g gulp
gulp
```

Javascript files available at [/examples](/examples) folder.


#Security

Please use at your own risk.

Zetcore is still under heavy development and not quite ready for "drop-in" production use. If you find a security issue, please email zbad305dev@gmail.com.

#Contributing

Zetcore needs some developer love. Please send pull requests for bug fixes, code optimization, and ideas for improvement.

#Browser support

## Building the browser bundle

To build zetcore full bundle for the browser (this is automatically executed after you run `npm install`):

```
node browser/build.js -a
```

This will generate a `browser/bundle.js` file which you can include in your HTML to use zetcore in the browser.

##Example browser usage

From example/simple.html
```
<!DOCTYPE html>
<html>
  <body>
    <script src="../browser/bundle.js"></script>
    <script>
      var bitcore = require('bitcore');
      var Address = bitcore.Address;
      var a = new Address('1KerhGhLn3SYBEQwby7VyVMWf16fXQUj5d');
      console.log('1KerhGhLn3SYBEQwby7VyVMWf16fXQUj5d is valid? '+a.isValid());
    </script>
  </body>
</html>
```

You can check a more complex usage example at examples/example.html.

## Generating a customized browser bundle

To build the main zetcore bundle, run:

```
node browser/build.js -m
```

To build all features into the zetcore bundle (which will lead to a large filesize), run:

```
node browser/build.js -a
```

To generate a customized zetcore bundle, you can specify which submodules you want to include in it with the -s option:

```
node browser/build.js -s Transaction,Address
```

This will generate a `browser/bundle.js` containing only the Transaction and Address class, with all their dependencies.  Use this option if you are not using the whole bitcore library, to optimize the bundle size, script loading time, and general resource usage.

## Tests

Run tests in node:

```
mocha
```

Or generate tests in the browser:

```
grunt shell
```

And then open test/index.html in your browser.

To run the code coverage report:

```
npm run-script coverage
```

And then open coverage/lcov-report/index.html in your browser.

#License

**Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).**

Copyright 2014 ZBad405.
Copyright 2013-2014 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/bitpay/bitcore/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
