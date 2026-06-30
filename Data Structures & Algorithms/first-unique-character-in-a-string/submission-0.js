class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        
        const uniques = new Map();

        for(let i = 0; i < s.length; i += 1) {
            if(!uniques.has(s[i])) {
                uniques.set(s[i], i);
            } else {
                uniques.set(s[i], - 1);
            }
        }

        for(const [key, val] of uniques.entries()) {
            if(val !== -1) {
                return val;
            }
        }

        return -1;

    }
}
