class Solution {
    indexOfChar(char) {
        if(char >= 'a' && char <= 'z') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        } else if(char >= 'A' && char <= 'Z') {
            return char.charCodeAt(0) - 'Z'.charCodeAt(0) + 26;
        }
    }
    characterReplacement(s, k) {

        let result = 0;
        const charCount = new Array(52).fill(0);

        let left = 0;
        for(let right = 0; right < s.length; right++) {
            const currentChar = s[right];
            charCount[this.indexOfChar(currentChar)]++;

            // while window is invalid
            while((right - left + 1) - Math.max(...charCount) > k) {
                // decrement charCount at 'left'
                charCount[this.indexOfChar(s[left])]--;
                // move left pointer forward
                left++;
            }

            // calculate the result WHEN the window becomes valid
            result = Math.max(result, right - left + 1); 
        }

        return result;
    }
}
