class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Track the length of the longest non-repeating substring found so far
        let result = 0;

        // Store the last seen index of each character
        const charSeenAtIndex = {};

        // Initialize sliding window's left boundary
        let left = 0;
        
        // Iterate through the string with right pointer
        for(let right = 0; right < s.length; right++) {
            // Get the current character
            const currentChar = s[right];

            // If the character hasn't been seen before
            if(charSeenAtIndex[currentChar] === undefined) {
                // Record its position in our hash map
                charSeenAtIndex[currentChar] = right;
            } else {
                // If this character has been seen before
                
                // If its previous occurrence is within our current window
                if(charSeenAtIndex[currentChar] >= left) {
                    // Move left pointer just past the previous occurrence
                    left = charSeenAtIndex[currentChar] + 1;
                }
                
                // Update the character's position in our hash map
                charSeenAtIndex[currentChar] = right;
            }

            // Calculate current window size and update result if larger
            // (right - left + 1) gives the length of the current valid window
            result = Math.max(result, right - left + 1);
        }

        // Return the length of the longest non-repeating substring
        return result;
    }
}
