class Solution {
    indexOfChar(char) {
        if(char >= 'a' && char <= 'z') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        } else if(char >= 'A' && char <= 'Z') {
            return char.charCodeAt(0) - 'A'.charCodeAt(0);
        }
    }
    characterReplacement(s, k) {

        let result = 0;

        for(let i = 0; i < s.length; i++) {

            const charCount = {};

            for(let j = i; j < s.length; j++) {

                const currentChar = s[j];

                if(charCount[currentChar] === undefined) {
                    charCount[currentChar] = 1; 
                } else {
                    charCount[currentChar]++;
                }

                // if window is valid
                if((j - i + 1) - Math.max(...Object.values(charCount)) <= k) {
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
