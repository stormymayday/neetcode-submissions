class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let result = 0;

        let left = 0;
        let right = 0;

        // const set = new Set();

        while(right < s.length) {

            // slice the string ARRAY
            let substr = s.slice(left, right + 1);

            // add into set
           //set.add(...substr);
            const set = new Set(substr);

            // compare lengths?
            if(substr.length !== set.size) {

                // reset
                // set.clear();

                // move left
                left++;

            } else {
                //
                result = Math.max(result, set.size);
                // reset
                // set.clear();
                // keep going
                right++;
            }

        }

        return result;

    }
}
