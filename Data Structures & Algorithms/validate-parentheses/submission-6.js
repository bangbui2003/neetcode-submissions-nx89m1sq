class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openParentheses = ['(', '{', '['];
        const closeParentheses = [')', '}', ']'];
        const stack = [];

        for (const c of s) {
            if (closeParentheses.includes(c)) {
                if (openParentheses[closeParentheses.indexOf(c)] === stack.pop()) {
                    continue;
                } else {
                    return false;
                }
            }
            if (openParentheses.includes(c)) stack.push(c);
        }

        if (stack.length === 0) return true;
        else return false;
    }
}
