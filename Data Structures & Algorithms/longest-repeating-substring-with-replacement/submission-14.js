class Solution {
    characterReplacement(s, k) {

        let result = 0;
        const charCount = {};

        let left = 0;
        for(let right = 0; right < s.length; right++) {

            const currentChar = s[right];

            if(charCount[currentChar] === undefined) {
                charCount[currentChar] = 1;
            } else {
                charCount[currentChar]++;
            }

            // If the window is invalid
            while((right - left + 1) - Math.max(...Object.values(charCount)) > k) {
                // decrement charCount at 'left'
                charCount[s[left]]--;
                // move left pointer forward
                left++;
            }
            
            // calculate the result when window becomes valid
            result = Math.max(result, right - left + 1); 
        }

        return result;
    }
}
