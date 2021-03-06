/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    var total = a + b;
    return a.toString() + " + " + b.toString() + " = " + total.toString();
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    const increaseArray = [];
    var index = startNumber;
    for (let i = 0; i <= endNumber-startNumber; i++) {
        if (i == 0) {
            increaseArray[i] = startNumber;
        } else {
            index = index + 1;
            increaseArray[i] = index;
        }
    }
    return increaseArray;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    var minNum = numbers[0];
    var maxNum = numbers[0];
    var obj = {};
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minNum) {
            minNum = numbers[i];
        } else if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    maxNum = Number(maxNum);
    minNum = Number(minNum);
    obj = {
        max: maxNum,
        min: minNum
    }
    return obj; //"{ max: " + max + ", min: " + min + " }";
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    array.sort();
    var obj = {};
    
    for (const index of array) {
        if (obj[index]) {
            obj[index] += 1;
        } else {
            obj[index] = 1;
        }
    }
    return obj;
}
