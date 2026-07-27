class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (const token of tokens) {
            if (token === "+" || token === "-" || token === "*" || token === "/") {
                // Second operand is popped first.
                const operand2 = stack.pop();
                const operand1 = stack.pop();

                let result;
                if (token === "+") {
                    result = operand1 + operand2;
                } else if (token === "-") {
                    result = operand1 - operand2;
                } else if (token === "*") {
                    result = operand1 * operand2;
                } else {
                    // Division should truncate toward zero.
                    result = Math.trunc(operand1 / operand2);
                }

                stack.push(result);
            } else {
                // Convert number string to integer.
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}
