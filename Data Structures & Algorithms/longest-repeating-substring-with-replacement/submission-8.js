class Solution {
    characterReplacement(s, k) {

        let result = 0;

        for(let i = 0; i < s.length; i++) {

            const charCount = new Map();

            for(let j = i; j < s.length; j++) {

                const currentChar = s[j];

                if(!charCount.has(currentChar)) {
                    charCount.set(currentChar, 1); 
                } else {
                    charCount.set(currentChar, charCount.get(currentChar)+1); 
                }

                // if window is valid
                if((j - i + 1) - Math.max(...charCount.values()) <= k) {
                    // calc result
                    result = Math.max(result, j - i + 1);
                } else {
                    // otherwise, go the next 'i'
                    break;
                }

            }

        }

        return result;

    }
}
