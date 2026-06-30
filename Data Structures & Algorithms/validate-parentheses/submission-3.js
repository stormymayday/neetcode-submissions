class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        if(s.length === 0) {
            return true;
        }

        if(s.length === 1) {
            return false;
        }

        const parens = {
            '(': ')',
            '{': '}',
            '[': ']',
        }

        const stack = [];

        for(let i = 0; i < s.length; i++) {
            const currentParen = s[i];

            if(parens[currentParen] !== undefined) {
                // if left, push
                stack.push(currentParen);
            } else {

                if(stack.length === 0) {
                    return false;
                }

                // pop
                const poppedParen = stack.pop();

                //  check
                if(parens[poppedParen] !== currentParen) {
                    return false;
                }

            }
            
        }

        return stack.length === 0;

    }
}
