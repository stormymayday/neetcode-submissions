class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let result = 0;

        for(let i = 0; i < s.length; i++) {
            const set = new Set();
            for(let j = i; j < s.length; j++) {

                const currentChar = s[j];

                if(set.has(currentChar)) {
                    break;
                } else {
                    set.add(currentChar);
                }

            }
            result = Math.max(result, set.size);
        }

        return result;

    }
}
