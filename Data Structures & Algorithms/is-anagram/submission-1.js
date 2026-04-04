class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false;
        }
        
        const charsCount = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            charsCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            charsCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        return charsCount.every((val) => val === 0);
    }
}
