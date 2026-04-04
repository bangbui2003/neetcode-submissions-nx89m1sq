class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        const arrS = Array.from(s);
        const arrT = Array.from(t);
        const sortedArrS = arrS.sort();
        const sortedArrT = arrT.sort();
        let index = 0;
        for (const word of sortedArrS) {
            if(word != sortedArrT[index])
            {
                return false;
            }
            index++;
        }
        return true;
    }
}
