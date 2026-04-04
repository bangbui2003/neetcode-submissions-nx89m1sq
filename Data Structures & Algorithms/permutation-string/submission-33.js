class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let characterFreq = {};
        for (let c of s1) {
            characterFreq[c] = (characterFreq[c] || 0) + 1;
        }
        let l = 0;
        let tempFreq = { ...characterFreq };
        for (let r = 0; r < s2.length;) {
            if (s1.includes(s2[r])) {
                while (r < s2.length) {
                    if (Object.keys(tempFreq)
                        .filter((key) => {
                        return tempFreq[key] !== 0;
                    }).length === 0) {
                        return true;
                    }
                    console.log('tempFreq', tempFreq);
                    // not include -> reset temp and r
                    if (!s1.includes(s2[r])) {
                        r++;
                        l = r;
                        tempFreq = { ...characterFreq };
                        break;
                    }
                    console.log('left ',l, ' right', r, ' character to find ', s2[r]);
                    // cannot locate the order of characters
                    if (tempFreq[s2[r]] === 0) {
                        l++;
                        r = l;
                        tempFreq = { ...characterFreq };
                        break;
                    }
                    tempFreq[s2[r]] -= 1;
                    r++;
                }
            } else {
                l = r;
                r++;
                tempFreq = { ...characterFreq };
            }
        }
        return tempFreq ? Object.keys(tempFreq).filter(key => tempFreq[key] > 0).length === 0 : false;
    }
}
