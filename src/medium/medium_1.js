import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var count = 0;
    let index;
    for (index in array) {
        count = count + array[index];
    }
    return count;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
   // array.sort();
    let sortArray = array.sort((a, b) => (a - b))
    var mid = 0;
    if (sortArray.length % 2 == 0) {
        mid = (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
    } else {
        mid = array[(array.length-1) / 2];
    }
    return mid;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let obj = {
        length: array.length,
        sum: getSum(array),
        mean: getSum(array) / array.length,
        median: getMedian(array),
        min: Math.min(...array),
        max: Math.max(...array),
        variance: variance(array, getSum(array) / array.length),
        standard_deviation: Math.sqrt(variance(array, getSum(array) / array.length))
    };
    return obj
}

