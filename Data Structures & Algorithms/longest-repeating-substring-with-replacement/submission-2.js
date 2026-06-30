class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let res = 0;

        const charCount = {};
        let left = 0;
        for(let right = 0; right < s.length; right++) {

            const currentChar = s[right];

            if(charCount[currentChar] === undefined) {
                charCount[currentChar] = 1;
            } else {
                charCount[currentChar]++;
            }

            // check if windo is valid
            if((right - left + 1) - Math.max(...Object.values(charCount)) <= k) {
                // valid
                // calcuate the result
                res = Math.max(res, right - left + 1);
            } else {
                // not valid
                while((right - left + 1) - Math.max(...Object.values(charCount)) > k) {
                    // pop left
                    const leftMostChar = s[left];
                    charCount[leftMostChar]--;
                    if(charCount[leftMostChar] === 0) {
                        delete charCount[leftMostChar];
                    }
                    left++;
                }
            }


        }
        return res;

    }
}
