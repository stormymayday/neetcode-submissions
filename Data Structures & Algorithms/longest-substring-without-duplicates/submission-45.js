class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
        let result = 0;

        const obj = {};

        let left = 0;
        for(let right = 0; right < s.length; right++) {
        
            const currentChar = s[right];

            if (obj[currentChar] !== undefined && obj[currentChar] >= left) {
                // step over
                left = obj[currentChar] + 1;
            }

            // update
            obj[currentChar] = right;

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
