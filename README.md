# Chinese to Digit

![build status](https://travis-ci.com/shana0440/chinese2digit.svg?branch=master)

transform chinese digit to general digit

## Install
```
npm install chinese2digit
```

## How to use
```
var chinese2digit = require('chinese2digit');

var transformedNumber = chinese2digit('四千八百萬');
assert(transformedNumber, 48000000);
```
