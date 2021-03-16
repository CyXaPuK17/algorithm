const {getArrayOfInt} = require('./utils');
const {
    bubbleSort,
    insertionSort,
    selectionSort
} = require('./sortrings');
const {binarySearch} = require('./search');

const array = binarySearch(getArrayOfInt(15, 10), 5);

console.log(array);