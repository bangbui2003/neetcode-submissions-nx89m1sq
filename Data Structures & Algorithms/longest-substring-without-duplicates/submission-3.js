class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let curLength = 0;
        let maxLength = 0;
        const temp = [];

        for (let c of s) {
            while (temp.includes(c) === true) {
                temp.shift();
            }

            temp.push(c);
            curLength = temp.length;
            maxLength = Math.max(maxLength, curLength);
        };

        return maxLength;
    }
}
