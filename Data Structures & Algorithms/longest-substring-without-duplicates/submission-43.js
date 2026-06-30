class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
        let result = 0;

        const charSeenAtIndex = new Map();

        let left = 0;
        for(let right = 0; right < s.length; right++) {
        
            const currentChar = s[right];

            if (charSeenAtIndex.has(currentChar) && charSeenAtIndex.get(currentChar) >= left) {
                // step over
                left = charSeenAtIndex.get(currentChar) + 1;
            }
               
            // update
            charSeenAtIndex.set(currentChar, right);

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}