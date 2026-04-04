class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            let subtraction = target - numbers[i];
            console.log('substraction', subtraction);
            if(numbers.indexOf(subtraction) > i) {
                return [i + 1, numbers.indexOf(subtraction) + 1];
            }
        }
    }
}
