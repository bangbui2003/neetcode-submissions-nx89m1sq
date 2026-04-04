class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            let l = i + 1, r = numbers.length - 1;

            let tmp = target - numbers[i];

            while (l <= r) {
                let midPos = l + Math.floor((r - l) / 2);

                if (numbers[midPos] === tmp) {
                    return [i + 1, midPos + 1];
                } else if (numbers[midPos] < tmp) {
                    l = midPos + 1;
                } else {
                    r = midPos - 1;
                }
            }
        }
        return [];
    }
}