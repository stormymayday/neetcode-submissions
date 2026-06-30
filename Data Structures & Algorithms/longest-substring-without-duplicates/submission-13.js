class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let result = 0;

        const charSeenAtIndex = {};

        let left = 0;
        for(let right = 0; right < s.length; right++) {

            const currentChar = s[right];

            // not seen
            if(charSeenAtIndex[currentChar] === undefined) {
                // add to hash map
                charSeenAtIndex[currentChar] = right;

                // calc length
                
            } else {
                // if seen

                // Check if current position of left is < than index
                if(charSeenAtIndex[currentChar] >= left) {
                    // move left to seenIndex + 1 IF
                    left = charSeenAtIndex[currentChar] + 1;
                }
                

                // update map
                charSeenAtIndex[currentChar] = right;
            }

            // issue here
            result = Math.max(result, right - left + 1);

        }

        return result;

    }
}
