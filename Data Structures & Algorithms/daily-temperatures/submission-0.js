class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // [30, 29, 28, 30, 31]
        // [30]
        // [30, 29, 28]
        // 30 > 29 -> 30: i = 3, 
        let res = new Array(temperatures.length).fill(0);
        const stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            if (stack.length > 0 && stack[stack.length - 1].value < temperatures[i]) {
                while (stack.length > 0 && stack[stack.length - 1].value < temperatures[i]) {
                    res[stack[stack.length - 1].index] = i - stack[stack.length - 1].index;
                    stack.pop();
                }
            }

            stack.push({
                value: temperatures[i],
                index: i
            });
        }

        return res;
    }
}
