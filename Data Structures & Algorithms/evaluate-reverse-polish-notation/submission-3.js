class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const dfs = () => {
            const stack = tokens.pop();

            if (!'+-*/'.includes(stack)) {
                return parseInt(stack);
            }

            const secondOperand = parseInt(dfs());
            const firstOperand = parseInt(dfs());

            if (stack === '+') {
                return  firstOperand + secondOperand;
            }

            if (stack === '-') {
                return firstOperand - secondOperand;
            }

            if (stack === '*') {
                return firstOperand * secondOperand;
            }

            if (stack === '/') {
                return parseInt(firstOperand / secondOperand);
            }
        }

        return dfs();
    }
}
 