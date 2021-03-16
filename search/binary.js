module.exports = {
    binarySearch: (array, target) => {
        array = array.sort();
        let start = 0;
        let end = array.length;
        let pivot = Math.floor((start + end) / 2);
        
        for (let i = 0; i < array.length; i++) {
            if (array[pivot] !== target) {
                if (target < array[pivot]) {
                    end = pivot;
                } else {
                    start = pivot;
                };

                pivot = Math.floor((start + end) / 2);
            };

            if (array[pivot] === target) {
                return `{Index of target = ${i}}`;
            }
        }

        return 'Not found target';
    }
};