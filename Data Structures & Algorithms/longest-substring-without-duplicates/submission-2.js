class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // longest subtring without duplicate characters
        // substring: a contiguous sequence of characters within a string

        // ex1: zxyzxyz
        // 1 2 3 <- z
        // z-1 x-2 y-3 z-3 <- x
        // z-1 x-2 y-3 z-3 x-3 <- y
        // z-1 x-2 y-3 z-3 x-3 y-3

        // ex2: zxyyxyz
        // z x y <- y
        // 1 2 3 <- y
        // n - index cua vi tri phat hien da ton tai + 1 -> 1
        // 2 <- x  index dang la 5(2 = )
        // x-1 y-2

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
