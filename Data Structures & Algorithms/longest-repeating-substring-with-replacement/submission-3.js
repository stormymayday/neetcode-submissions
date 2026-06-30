class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Track the maximum valid substring length found
        let res = 0;

        // Use a sliding window approach with a single character frequency counter
        const charCount = {};
        let left = 0;
        
        // Expand the window to the right
        for(let right = 0; right < s.length; right++) {
            // Get the current character at right pointer
            const currentChar = s[right];

            // Update frequency count for the current character
            if(charCount[currentChar] === undefined) {
                charCount[currentChar] = 1;
            } else {
                charCount[currentChar]++;
            }

            // Check if window is valid:
            // (window length) - (count of most frequent char) <= k
            if((right - left + 1) - Math.max(...Object.values(charCount)) <= k) {
                // Valid window: update the maximum length
                res = Math.max(res, right - left + 1);
            } else {
                // Invalid window: shrink from left until valid
                while((right - left + 1) - Math.max(...Object.values(charCount)) > k) {
                    // Remove the leftmost character from the count
                    const leftMostChar = s[left];
                    charCount[leftMostChar]--;
                    
                    // If character count reaches zero, remove it from the object
                    if(charCount[leftMostChar] === 0) {
                        delete charCount[leftMostChar];
                    }
                    
                    // Move left pointer to shrink the window
                    left++;
                }
            }
        }
        
        // Return the maximum valid substring length
        return res;
    }
}
