class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // Edge case: if s1 is longer than s2, permutation cannot exist as substring
        if(s1.length > s2.length) {
            return false;
        }
        
        // Create arrays to store character frequencies (26 lowercase letters)
        const charSet1 = new Array(26).fill(0); // For s1
        const charSet2 = new Array(26).fill(0); // For current window in s2
        
        // Initialize both frequency arrays with the first window
        // - charSet1 contains frequencies of all characters in s1
        // - charSet2 contains frequencies of the first s1.length characters in s2
        for(let i = 0; i < s1.length; i++) {
            // Increment count for each character in s1
            const currentCharInS1 = s1[i];
            charSet1[currentCharInS1.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            
            // Increment count for each character in the first window of s2
            const currentCharInS2 = s2[i];
            charSet2[currentCharInS2.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        // Initialize left pointer for sliding window
        let left = 0;
        
        // Iterate through s2 with right pointer starting at the end of first window
        for(let right = s1.length - 1; right < s2.length; right++) {
            // Compare character frequency arrays
            let count = 0; // Count of matching character frequencies
            for(let i = 0; i < 26; i++) {
                // If frequencies match for this character, increment count
                if(charSet1[i] === charSet2[i]) {
                    count++;
                }
            }
            
            // If all 26 character frequencies match, we found a permutation
            if(count === 26) {
                return true;
            }
            
            // Don't try to slide window past the end of s2
            if(right === s2.length - 1) break;
            
            // Slide the window:
            // 1. Add the next character (the one after current right)
            charSet2[s2[right + 1].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            
            // 2. Remove the leftmost character (no longer in window)
            charSet2[s2[left].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            
            // 3. Move left pointer to continue sliding
            left++;
        }
        
        // No permutation found after checking all windows
        return false;
    }
}