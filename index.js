module.exports = {
    binToOct : function(number) {
        return parseInt(number, 2).toString(8);
    },
    binToDec : function(number) {
        return parseInt(number, 2).toString(10);
    },
    binToHex : function(number) {
        return parseInt(number, 2).toString(16);
    },
    octToBin : function(number) {
        return parseInt(number, 8).toString(2);
    },
    octToDec : function(number) {
        return parseInt(number, 8).toString(10);
    },
    octToHex : function(number) {
        return parseInt(number, 8).toString(16);
    },
    decToBin : function(number) {
        return parseInt(number, 10).toString(2);
    },
    decToOct : function(number) {
        return parseInt(number, 10).toString(8);
    },
    decToHex : function(number) {
        return parseInt(number, 10).toString(16);
    },
    hexToBin : function(number) {
        return parseInt(number, 16).toString(2);
    },
    hexToOct : function(number) {
        return parseInt(number, 16).toString(8);
    },
    hexToDec : function(number) {
        return parseInt(number, 16).toString(10);
    },
    customConversion : function(number, currentBase, targetBase) {
        return parseInt(number, currentBase).toString(targetBase);
    },
}