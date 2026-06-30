class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        if(s.length === 0) {
            return true;
        }

        if(s.length % 2 !== 0) {
            return false;
        }

        const parens = {
            "{": "}",
            "(": ")",
            "[": "]",
        }

        const stack = [];

        for(let i  = 0; i < s.length; i++) {

            const currentParen = s[i];
            
            // if left
            if(parens[currentParen] !== undefined) {
                stack.push(currentParen);
            } else {
                // right
                // if stack is empty
                if(stack.length === 0) {
                    return false;
                }
                // pop and compare
                const poppedParen = stack.pop();
                if(parens[poppedParen] !== currentParen) {
                    return false;
                }
            }

        }

        return stack.length === 0;

    }
}
