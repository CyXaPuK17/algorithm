module.exports = {
    selectionSort: array => {
        for (let i = 0; i < array.length - 1; i++) {
            let indexMin = i;

            for (let j = i + 1; j < array.length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j;
                }
            }

            if (indexMin !== i) {
                [array[i], array[indexMin]] = [array[indexMin], array[i]];
            }
        }

        return array;
    }
};