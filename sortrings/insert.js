module.exports = {
    insertionSort: array => {
        for (let i = 1; i < array.length; i++) {
            for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
            }        
        }
    
        return array;
    }
};