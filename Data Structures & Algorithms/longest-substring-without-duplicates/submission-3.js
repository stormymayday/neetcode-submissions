class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let result = 0;

        for(let i = 0; i < s.length; i++) {

            const set = new Set();
            let count = 0;

            for(let j = i; j < s.length; j++) {
                set.add(s[j]);
                count++;

                if(count !== set.size) {
                    // reset
                    set.clear();
                    count = 0;
                    break;
                }

                result = Math.max(result, set.size);

            }

            

        }

        return result;

    }
}
