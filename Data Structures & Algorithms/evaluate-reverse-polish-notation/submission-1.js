class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = ["+", "-", "*", "/"];
        for (const character of tokens) {
            if (stack.length >= 2 && operators.includes(character)) {
                const secondOperand = parseInt(stack.pop());
                const firstOperand = parseInt(stack.pop());
                let res = 0;
                if (character === "+") {
                    res = firstOperand + secondOperand;
                } else if (character === "-") {
                    res = firstOperand - secondOperand;
                } else if (character === "*") {
                    res = firstOperand * secondOperand;
                } else if (character === "/") {
                    res = firstOperand / secondOperand;
                }

                stack.push(res);
                continue;
            }
            stack.push(character);
        }

        return parseInt(stack.pop());
    }
}
 