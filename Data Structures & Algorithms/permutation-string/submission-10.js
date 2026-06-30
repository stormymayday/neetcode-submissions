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

        const s1Count = new Array(56).fill(0);
        const s2Count = new Array(56).fill(0);

        for(let i = 0; i < s1.length; i++) {
            s1Count[this.indexOfChar(s1[i])]++;
            s2Count[this.indexOfChar(s2[i])]++;
        }

        let left = 0;
        for(let right = s1.length - 1; right < s2.length; right++) {

            // compare char counts
            if(this.compareCharCount(s1Count, s2Count)) {
                return true;
            } else {
                // remove from left
                s2Count[this.indexOfChar(s2[left])]--;

                // shift left
                left++;

                // add to right IF
                if(right < s2.length) {
                    s2Count[this.indexOfChar(s2[right + 1])]++;
                }
                
            }
        }
        return false;

    }

    indexOfChar(char) {
        if(char >= 'a' && char <= 'z') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        } else if(char >= 'A' && char <= 'Z') {
            return char.charCodeAt(0) - 'A'.charCodeAt(0) + 26;
        }
    }

    compareCharCount(arr1, arr2) {
        for(let i = 0; i < 52; i++) {
            if(arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
    
}
