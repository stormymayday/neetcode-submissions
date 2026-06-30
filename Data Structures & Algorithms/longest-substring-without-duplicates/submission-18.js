class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let result = 0;

        const set = new Set();

        let left = 0;
        let right  = 0;
        while(right < s.length) {

            const currentChar = s[right];

            if(!set.has(currentChar)) {

                set.add(currentChar);
                result = Math.max(result, set.size);
                right++;


            } else {

                set.delete(s[left]);
                left++;
                
            }

        }


        return result;

    }
}
