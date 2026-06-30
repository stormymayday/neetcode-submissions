class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict, i = 0, memo = {}) {
        if(i in memo) {
            return memo[i];
        }

        if(i === s.length) {
            return true;
        }

        for(const word of wordDict) {
            // check if prefix
            if(s.startsWith(word, i)) {
                if(this.wordBreak(s, wordDict, i + word.length, memo) === true) {
                    memo[i] = true;
                    return true;
                }
            }
        }

        memo[i] = false;
        return false;
    }
}
