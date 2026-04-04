class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        //
        let characterFreq = {};
        for (let c of s1) {
            characterFreq[c] = (characterFreq[c] || 0) + 1;
        }
        let l = 0;
        let tempFreq = null;
        for (let r = 0; r < s2.length;) {
            if (s1.includes(s2[r])) {
                tempFreq = { ...characterFreq };
                while (r < s2.length) {
                    if (Object.keys(tempFreq)
                        .filter((key) => {
                        return tempFreq[key] > 0;
                    }).length === 0) {
                        return true;
                    }
                    console.log('tempFreq', tempFreq);
                    if (!s1.includes(s2[r])) {
                        l++;
                        r = l;
                        console.log('left', l, 'right', r);
                        break;
                    }
                    if (tempFreq[s2[r]] === 0) {
                        l++;
                        r = l;
                        console.log('left', l, 'right', r);
                        break;
                    };
                    console.log('right', r);
                    tempFreq[s2[r]] -= 1;
                    r++;
                }
            } else {
                console.log('inside else branch with right', r);
                r++;
            }
        }

        console.log('tempFreq outside', tempFreq);

        return tempFreq ? Object.keys(tempFreq).filter(key => tempFreq[key] > 0).length === 0 : false;
    }
}
