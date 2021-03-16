const {getRandomInt} = require('./getRandomInt');

module.exports = {
    getArrayOfInt: (len, max) => {
        let array = [];
    
        for (let i = 0; i < len; i++) {
            array.push(getRandomInt(max));
        }
    
        return array;
    }
};