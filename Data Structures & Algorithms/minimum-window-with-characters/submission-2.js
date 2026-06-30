class Solution {
    /**
     * Find the minimum window substring in s that contains all characters from t
     * @param {string} s - The source string to search in
     * @param {string} t - The target string containing characters we need to find
     * @return {string} - The minimum window substring or empty string if not found
     */
    minWindow(s, t) {
        // Edge case: if t is longer than s, it's impossible to find a window
        if(t.length > s.length) {
            return "";
        }
        
        // Create frequency counters for characters in t and the sliding window in s
        // Size 52 to accommodate both lowercase (0-25) and uppercase (26-51) letters
        const tCount = new Array(52).fill(0);  // Character frequency in target string t
        const sCount = new Array(52).fill(0);  // Character frequency in current window of s
        
        // Initialize frequency counters:
        // - Count characters in target string t
        // - Initialize the first window in s with t.length characters
        for(let i = 0; i < t.length; i++) {
            tCount[this.getIndex(t[i])]++;     // Increment count for character in t
            sCount[this.getIndex(s[i])]++;     // Increment count for initial window in s
        }
        
        // Variables to track the minimum window found
        let minStart = 0;         // Starting index of minimum window
        let minLength = Infinity; // Length of minimum window (initialized to infinity)
        
        // Initialize sliding window pointers
        let left = 0;             // Left boundary of current window
        let right = t.length - 1; // Right boundary of current window (inclusive)
        
        // Slide the window through string s
        while(right < s.length) {
            
            // Check if current window contains all characters from t
            if(this.isValidWindow(tCount, sCount)) {
                // Current window is valid - attempt to minimize it
                
                // Update minimum window if current window is smaller
                minLength = Math.min(minLength, right - left + 1);
                minStart = left;
                
                // Shrink window from left to find potentially smaller valid window
                sCount[this.getIndex(s[left])]--; // Remove leftmost character from window
                left++;                           // Move left pointer right
                
            } else {
                // Current window is invalid - expand it
                
                // Move right pointer to expand window
                right++;
                
                // Add new character to window if within string bounds
                if(right < s.length) {
                    sCount[this.getIndex(s[right])]++;
                }
            }
        }
        
        // Return the minimum window substring or empty string if none found
        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
    }
    
    /**
     * Convert character to array index (0-51)
     * @param {string} char - Single character to convert
     * @return {number} - Index in the frequency array
     */
    getIndex(char) {
        if(char >= 'a' && char <= 'z') {
            // Lowercase letters map to indices 0-25
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        } else {
            // Uppercase letters map to indices 26-51
            return char.charCodeAt(0) - 'A'.charCodeAt(0) + 26;
        }
    }
    
    /**
     * Check if current window contains all characters from target string
     * @param {Array<number>} tCount - Frequency count of characters in target string
     * @param {Array<number>} sCount - Frequency count of characters in current window
     * @return {boolean} - True if window contains all required characters
     */
    isValidWindow(tCount, sCount) {
        for(let i = 0; i < 52; i++) {
            // For each character, window must have at least as many occurrences as target
            if(sCount[i] < tCount[i]) {
                return false;  // Missing required characters
            }
        }
        return true;  // All required characters are present in sufficient quantity
    }
}