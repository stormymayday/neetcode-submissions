class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // Edge case: s1 can't be a substring of s2 if it's longer
        if(s1.length > s2.length) {
            return false;
        }
        
        // Create frequency arrays for both strings
        // Size 52 accounts for both lowercase (0-25) and uppercase (26-51) letters
        const s1Count = new Array(52).fill(0);
        const s2Count = new Array(52).fill(0);
        
        // Count characters in s1 and the first window of s2
        // that has the same length as s1
        for(let i = 0; i < s1.length; i++) {
            s1Count[this.indexOfChar(s1[i])]++;
            s2Count[this.indexOfChar(s2[i])]++;
        }
        
        // Check if the first window is already a permutation of s1
        if(this.compareCharCount(s1Count, s2Count)) {
            return true;
        }
        
        // Slide the window through s2, one character at a time
        for(let right = s1.length; right < s2.length; right++) {
            // Remove the leftmost character from the window
            // (right - s1.length) gives us the index of the character
            // that's leaving the window
            s2Count[this.indexOfChar(s2[right - s1.length])]--;
            
            // Add the new rightmost character to the window
            s2Count[this.indexOfChar(s2[right])]++;
            
            // After each slide, check if the current window is a permutation of s1
            // by comparing their character frequency arrays
            if(this.compareCharCount(s1Count, s2Count)) {
                return true;
            }
        }
        
        // If no permutation is found after checking all possible windows
        return false;
    }
    
    /**
     * Converts a character to its corresponding index in the frequency array
     * - Lowercase letters 'a' to 'z' map to indices 0-25
     * - Uppercase letters 'A' to 'Z' map to indices 26-51
     * - Any other character maps to index 0 (this is a simplification)
     */
    indexOfChar(char) {
        if(char >= 'a' && char <= 'z') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        } else if(char >= 'A' && char <= 'Z') {
            return char.charCodeAt(0) - 'A'.charCodeAt(0) + 26;
        }
        return 0; // Handle other characters (good practice to add)
    }
    
    /**
     * Compares two character frequency arrays to check if they represent
     * the same set of characters (which would indicate a permutation)
     */
    compareCharCount(arr1, arr2) {
        for(let i = 0; i < 52; i++) {
            if(arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
    
}
