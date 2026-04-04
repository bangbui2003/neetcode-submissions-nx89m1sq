class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const results = {};

        for(let str of strs) {
            const count = new Array(26).fill(0);

            for(let c of str) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = count.join(',');

            if(!results[key]) {
                results[key] = [];
            }

            results[key].push(str);
        }

        return Object.values(results);
    }
}
