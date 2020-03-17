# convert-any-base

An easy-to-use base converter

### Installation

`npm install convert-any-base`  

### Examples

``` javascript
var convert = require('convert-any-base');

let decimalNumber = 2634; // 2634

console.log(convert.decToBin(decimalNumber)); // 101001001010
console.log(convert.decToOct(decimalNumber)); // 5112
console.log(convert.decToHex(decimalNumber)); // a4a
```

``` javascript
var convert = require('convert-any-base');

let baseSevenNumber = 143; // 143

console.log(convert.customConversion(baseSevenNumber, 7, 13)); // 62
```

### Methods

- binToOct(number)
- binToDec(number)
- binToHex(number)
- octToBin(number)
- octToDec(number)
- octToHex(number)
- decToBin(number)
- decToOct(number)
- decToHex(number)
- hexToBin(number)
- hexToOct(number)
- hexToDec(number)
- customConversion(number, currentBase, targetBase)

### License

Licensed under MIT. See [LICENSE](LICENSE) for more information.  

------

Created by [Mark Amirkan](https://markamirkan.com)