class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let result = 0;

        const set = new Set();

        let left = 0;
        for(let right = 0; right < s.length; right++) {

            const currentChar = s[right];

            if(set.has(currentChar)) {

                 while(set.has(currentChar)) {
                    set.delete(s[left]);
                    left++;
                }

                set.add(currentChar);

            } else {

               set.add(currentChar);

            }

            result = Math.max(result, set.size);

        }

        return result;
    }
}
