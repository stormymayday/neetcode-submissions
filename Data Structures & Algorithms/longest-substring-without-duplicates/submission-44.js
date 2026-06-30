class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let result = 0;

        const charSeenAtIndex = new Map();

        let left = 0;
        let right = 0;
        while(right < s.length) {
        
            const currentChar = s[right];

            if (charSeenAtIndex.has(currentChar) && charSeenAtIndex.get(currentChar) >= left) {
                // step over
                left = charSeenAtIndex.get(currentChar) + 1;
            }
               
            // update
            charSeenAtIndex.set(currentChar, right);

            result = Math.max(result, right - left + 1);

            right++
        }

        return result;
    }
}