class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let res = 0;

        for(let i = 0; i < s.length; i++) {

            const charCount = {};

            for(let j = i; j < s.length; j++) {

                const currentChar = s[j];

                if(charCount[currentChar] === undefined) {
                    charCount[currentChar] = 1;
                } else {
                    charCount[currentChar]++;
                }

                if((j - i + 1) - Math.max(...Object.values(charCount)) <=k) {

                    res = Math.max(res, j - i + 1);

                }


            }

        }

        return res;

    }
}
