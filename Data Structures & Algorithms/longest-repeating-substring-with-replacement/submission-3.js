class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // uppercases

        // s - consisting only uppercase english characters and an integer k
        // k - can choose k up to k characters -> replace with any other uppercase english characters
        // how can i decide which positions to replace the characters

        // brute forces
        // keep replacing until k characters have been replaced -> return the length of longest string?

        // A B A A B B B; k = 1
        // A A A A B B B - option

        let count = new Map();
        let res = 0;

        let l = 0,
            maxf = 0;

        for (let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxf = Math.max(maxf, count.get(s[r]));

            while (r - l + 1 - maxf > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;        
    }
}
