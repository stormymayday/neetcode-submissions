class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const res = [];
        const curr = [];
        function helper(index) {
            if(index === s.length) {
                res.push(curr.join(" "));
                return;
            }
            
            for(let i = 0; i < wordDict.length; i += 1) {

                if(s.substring(index, index + wordDict[i].length) === wordDict[i]) {
                    // Make a choice
                    curr.push(wordDict[i]);

                    // Explore
                    helper(index + wordDict[i].length);

                    // Backtrack
                    curr.pop();
                }

            }

            // + 1return [];
        }
        helper(0);
        return res;
    }
}
