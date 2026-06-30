class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length) {
            return false;
        }

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        let matchCount = 0;
        for(let i = 0; i < 26; i++) {
            if(s1Count[i] === s2Count[i]) {
                matchCount++;
            }
        }

        let left = 0;
        for(let right  = s1.length; right < s2.length; right++) {

            if(matchCount === 26) {
                return true;
            }

            // add at right
            const newCharIndex = s2.charCodeAt(right) - 'a'.charCodeAt(0);
            s2Count[newCharIndex]++;
            if(s2Count[newCharIndex] === s1Count[newCharIndex]) {
                matchCount++;
            } else if(s2Count[newCharIndex] === s1Count[newCharIndex] + 1) {
                matchCount--;
            }


            // remove at left
            const oldCharIndex = s2.charCodeAt(left) - 'a'.charCodeAt(0);
            s2Count[oldCharIndex]--;
            if(s2Count[oldCharIndex] === s1Count[oldCharIndex]) {
                matchCount++;
            } else if(s2Count[oldCharIndex] === s1Count[oldCharIndex] - 1) {
                matchCount--;
            }

            left++;

        }

        return matchCount === 26;

    }
}
