class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // If s1 is longer than s2, a permutation cannot exist as a substring
        if (s1.length > s2.length) {
            return false;
        }

        const charSet1 = new Array(26).fill(0); // Frequency count for s1
        const charSet2 = new Array(26).fill(0); // Frequency count for current window in s2
        
        // Populate frequency arrays for s1 and the first window of s2
        for (let i = 0; i < s1.length; i++) {
            charSet1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            charSet2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        // Count how many characters have matching frequencies
        let matchCount = 0;
        for (let i = 0; i < 26; i++) {
            if (charSet1[i] === charSet2[i]) {
                matchCount++;
            }
        }

        let left = 0;

        // Iterate over s2, sliding the window one character at a time
        for (let right = s1.length; right < s2.length; right++) {
            // If all 26 character counts match, we found a permutation
            if (matchCount === 26) {
                return true;
            }

            // Add the next character to the window
            let newCharIndex = s2.charCodeAt(right) - 'a'.charCodeAt(0);
            charSet2[newCharIndex]++;
            if (charSet2[newCharIndex] === charSet1[newCharIndex]) {
                matchCount++; // Character count now matches
            } else if (charSet2[newCharIndex] === charSet1[newCharIndex] + 1) {
                matchCount--; // Went over the expected count
            }

            // Remove the leftmost character from the window
            let oldCharIndex = s2.charCodeAt(left) - 'a'.charCodeAt(0);
            charSet2[oldCharIndex]--;
            if (charSet2[oldCharIndex] === charSet1[oldCharIndex]) {
                matchCount++; // Character count now matches
            } else if (charSet2[oldCharIndex] === charSet1[oldCharIndex] - 1) {
                matchCount--; // No longer matches
            }

            // Move the left pointer forward
            left++;
        }

        // Final check for the last window
        return matchCount === 26;
    }
}