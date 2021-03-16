const {getArrayOfInt} = require('./utils');
const {
    bubbleSort,
    insertionSort,
    selectionSort
} = require('./sortrings');

const array = selectionSort(getArrayOfInt(15, 50));

console.log(array);