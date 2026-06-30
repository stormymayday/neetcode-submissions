class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        
        // Phase 1: Count all the prefixes
        const prefixCount = new Map();
        for(const str of strs) {
            const prefixes = this.getAllPrefixes(str);
            for(const prefix of prefixes) {
                prefixCount.set(prefix, (prefixCount.get(prefix) || 0) + 1);
            }
        }
        
        // Phase 2: Get the longest prefix
        const res = [""];
        for(const [prefix, count] of prefixCount.entries()) {
            // count must be equal to number of input strings
            if(count === strs.length) {
                if(res[0].length < prefix.length) {
                    res[0] = prefix;
                }
            }
        }
        return res;

    }

    getAllPrefixes(word) {
        const prefixes = [];
        for(let i = 1; i <= word.length; i += 1) {
            prefixes.push(word.slice(0, i));
        }
        return prefixes;
    }
}
