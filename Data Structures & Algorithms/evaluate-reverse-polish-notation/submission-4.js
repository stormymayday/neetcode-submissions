class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        const stack = [];

        for(let i = 0; i < tokens.length; i++) {

            const currentToken = tokens[i];

            if(currentToken === '+') {
                stack.push(stack.pop() + stack.pop());
            } else if(currentToken === '-') {
                const num1 = stack.pop();
                const num2 = stack.pop();
                stack.push(num2 - num1);
            } else if(currentToken === '*') {
                stack.push(stack.pop() * stack.pop());
            } else if(currentToken === '/') {
                const num1 = stack.pop();
                const num2 = stack.pop();
                stack.push(Math.trunc(num2 / num1));
            } else {
                stack.push(parseInt(currentToken));
            }

        }

        return stack.pop();

    }
}
