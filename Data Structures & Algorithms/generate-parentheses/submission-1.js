class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        const curr = [];
        function helper(open, close) {
            // if(open > n || close > n) {
            //     return;
            // }
            if(open === n && close === n) {
                res.push(curr.join(""));
                return;
            }

            if(open < n) {
                curr.push("(");
                helper(open + 1, close);
                curr.pop();
            } 
            
            if(open > close) {
                // curr.push("(");
                // helper(open + 1, close);
                // curr.pop();
                curr.push(")");
                helper(open, close + 1);
                curr.pop();
            }
        }
        helper(0, 0);
        return res;
    }
}
