class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Track the maximum valid substring length found
        let res = 0;
        
        // Try every possible starting position in the string
        for(let i = 0; i < s.length; i++) {
            // Create an object to track character frequencies in the current substring
            const charCount = {};
            
            // Extend the substring by adding characters one by one
            for(let j = i; j < s.length; j++) {
                const currentChar = s[j];
                
                // Update frequency count for the current character
                if(charCount[currentChar] === undefined) {
                    charCount[currentChar] = 1;
                } else {
                    charCount[currentChar]++;
                }
                
                /**
                 * Check if the current substring is valid:
                 * 1. (j - i + 1) is the length of the current substring
                 * 2. Math.max(...Object.values(charCount)) gets the highest frequency of any character
                 * 3. Their difference is the number of characters that would need to be replaced
                 * 4. If this number is <= k, the substring is valid
                 */
                if((j - i + 1) - Math.max(...Object.values(charCount)) <= k) {
                    // Update the maximum length if current substring is longer
                    res = Math.max(res, j - i + 1);
                }
            }
        }
        
        // Return the maximum valid substring length
        return res;
    }
}
