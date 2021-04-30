"use strict";
/**
 * Function which calculates the average of only odd positive numbers.
 */
exports.__esModule = true;
exports.averageOddPositiveIntegers = void 0;
//js reduce? -- cool functions
function averageOddPositiveIntegers(input) {
    var sum = 0;
    var counter = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0 && input[i] % 2 == 1) {
            sum += input[i];
            counter++;
        }
    }
    return (counter == 0 ? 0 : sum / counter);
}
exports.averageOddPositiveIntegers = averageOddPositiveIntegers;
