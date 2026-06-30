class Solution {
    /**
     * Finds the length of the longest substring without repeating characters.
     * Uses the sliding window technique with a HashSet for optimal performance.
     *
     * @param {string} s - The input string.
     * @return {number} The length of the longest unique substring.
     */
    lengthOfLongestSubstring(s) {
		    // Stores the maximum length of a unique substring
        let result = 0;
        // Set to track unique characters in the current window
        const set = new Set();
         // Left pointer of the sliding window
        let left = 0;
        // Right pointer of the sliding window
        let right = 0;

        // Iterate through the string using the right pointer
        while (right < s.length) {
		        // Get the current character
            const currentChar = s[right];

            // If the character is already in the set, it means there's a duplicate
            if (set.has(currentChar)) {
		            // Remove the leftmost character from the set
                set.delete(s[left]);
	               // Move the left pointer forward to shrink the window
                left++;
            } else {
		            // Add the new character to the set
                set.add(currentChar);
                // Update max length if needed
                result = Math.max(result, right - left + 1);
                // Expand the window by moving the right pointer
                right++;
            }
        }
				// Return the length of the longest unique substring
        return result;
    }
}
