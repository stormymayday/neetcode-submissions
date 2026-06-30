class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let result = 0;

        let charCount = {};

        let left = 0;
        for(let right = 0; right < s.length; right++) {

            const currentChar = s[right];

            if(charCount[currentChar] === undefined) {
                charCount[currentChar] = 1;
            } else {
                charCount[currentChar]++;
            }

            // if window is valid
            if((right - left + 1) - Math.max(...Object.values(charCount)) <= k) {

            } else {

                while((right - left + 1) - Math.max(...Object.values(charCount)) > k) {
                    charCount[s[left]]--;
                    left++;
                }

            }
                // calculate the result
            result = Math.max(result, right - left + 1);

            // otherwise, shift left pointer

        }

        return result;

    }


}
