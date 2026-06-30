class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let result = 0;

        let left = 0;
        let right = 0;

        const set = new Set();

        while(right < s.length) {

            let currentChar = s[right];

            if(!set.has(currentChar)) {
                set.add(currentChar);
                result = Math.max(result, set.size);
            } else {

                // remove from left
                while(set.has(currentChar)) {

                    set.delete(s[left]);
                    left++;

                }

                set.add(currentChar);

            }

            right++;

        }


        return result;

    }
}
