class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let result = 0;

        let charSeenAtIndex = {};

        let left = 0;
        for(let right = 0; right < s.length; right++) {

            const currentChar = s[right];

            if(charSeenAtIndex[currentChar] === undefined) {
                charSeenAtIndex[currentChar] = right;
            } else {

                if(charSeenAtIndex[currentChar] >= left) {
                    left = charSeenAtIndex[currentChar]+1;
                }
                
                charSeenAtIndex[currentChar] = right;

            }

            result = Math.max(result, right - left + 1);

        }

        return result;
    }
}
