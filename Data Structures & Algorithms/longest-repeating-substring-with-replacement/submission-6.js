class Solution {
    indexOfChar(char) {
        if(char >= 'a' && char <= 'z') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        } else if(char >= 'A' && char <= 'Z') {
            return char.charCodeAt(0) - 'A'.charCodeAt(0);
        }
    }
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let result = 0;

        for(let i = 0; i < s.length; i++) {

            const charCount = new Array(52).fill(0);

            for(let j = i; j < s.length; j++) {

                const currentChar = s[j];

                charCount[this.indexOfChar(currentChar)]++;

                // if window is valid
                if((j - i + 1) - Math.max(...charCount) <= k) {
                    // calc result
                    result = Math.max(result, j - i + 1);
                } else {
                    break;
                }

            }

        }

        return result;

    }
}
