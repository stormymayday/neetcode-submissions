class Solution {
    characterReplacement(s, k) {

        let result = 0;
        const charCount = new Map();

        let left = 0;
        for(let right = 0; right < s.length; right++) {

            const currentChar = s[right];

            if(!charCount.has(currentChar)) {
                charCount.set(currentChar, 1);
            } else {
                charCount.set(currentChar, charCount.get(currentChar) + 1);
            }

            // If the window is invalid, keep shifting the left pointer
            while((right - left + 1) - Math.max(...charCount.values()) > k) {
                // decrement charCount at 'left'
                charCount.set(s[left], charCount.get(s[left]) - 1);
                // move left pointer forward
                left++;
            }

            // calculate the result when the window is valid
            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
