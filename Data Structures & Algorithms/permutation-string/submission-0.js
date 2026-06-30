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

        const charSet1 = new Array(26).fill(0);
        const charSet2 = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++) {
            const currentCharInS1 = s1[i];
            charSet1[currentCharInS1.charCodeAt(0) - 'a'.charCodeAt(0)]++;

            const currentCharInS2 = s2[i];
            charSet2[currentCharInS2.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let left = 0;

        // let count = 0;

        for(let right = s1.length - 1; right < s2.length; right++) {

            // compare char sets
            let count = 0;
            for(let i = 0; i < 26; i++) {
                if(charSet1[i] === charSet2[i]) {
                    count++;
                } 
                // else {
                //     count = 0;
                //     break;
                // }

            }
            if(count === 26) {
                return true;
            }
            
            // Don't slide the window on the last iteration
            if(right === s2.length - 1) break;


            // add at right
            charSet2[s2[right + 1].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            // remove at left
            charSet2[s2[left].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            // shift left pointer
            left++;
            
        }

        return false;

    }
}
