class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {

        const charCount = new Map();
        let longest = 0;
        let left = 0;
        for(let right = 0; right < s.length; right += 1) {

            charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);

            while(charCount.size > k) {

                charCount.set(s[left], charCount.get(s[left]) - 1);

                if(charCount.get(s[left]) === 0) {
                    charCount.delete(s[left]);
                } 

                left += 1;

            }

            if(charCount.size <= k) {
                longest = Math.max(longest, right - left + 1);
            }

        }

        return longest;

    }
}
