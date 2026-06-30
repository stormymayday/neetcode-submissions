class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0;

        const obj = {};

        let left = 0;
        let right = 0;
        while(right < s.length) {
        
            const currentChar = s[right];

            if (obj[currentChar] !== undefined) {

                // if in range
                if(obj[currentChar] >= left) {
                    // step over
                    left = obj[currentChar] + 1;
                }

            }
            
            // update
            obj[currentChar] = right;

            result = Math.max(result, right - left + 1);
            right++;
        }

        return result;
    }
}
