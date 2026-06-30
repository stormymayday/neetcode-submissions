class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return "";
        }
        
        let minLength = Infinity;
        let result = "";
        
        // Try every possible starting index
        for (let i = 0; i < s.length; i++) {
            // Try every possible ending index
            for (let j = i; j < s.length; j++) {
                // Get the current substring
                const currentSubstr = s.substring(i, j + 1);
                
                // Check if the substring contains all characters from t
                if (this.containsAllChars(currentSubstr, t)) {
                    // Update minimum window if this substring is smaller
                    if (currentSubstr.length < minLength) {
                        minLength = currentSubstr.length;
                        result = currentSubstr;
                    }
                    
                    // No need to make the window larger once we find a valid one
                    break;
                }
            }
        }
        
        return result;
    }
    
    containsAllChars(s, t) {
        // Create a frequency map for characters in t
        const charMap = new Map();
        for (let char of t) {
            charMap.set(char, (charMap.get(char) || 0) + 1);
        }
        
        // Check if s contains all characters in the required frequencies
        for (let char of s) {
            if (charMap.has(char)) {
                charMap.set(char, charMap.get(char) - 1);
                if (charMap.get(char) === 0) {
                    charMap.delete(char);
                }
            }
        }
        
        // If the map is empty, all characters have been found
        return charMap.size === 0;
    }
}