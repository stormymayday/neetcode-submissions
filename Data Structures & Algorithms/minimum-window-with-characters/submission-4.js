class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if(t.length > s.length) {
            return "";
        }

        let minLength = Infinity;
        let minIndex = 0;

        const tCharCount = new Array(52).fill(0);
        const sCharCount = new Array(52).fill(0);

        for(let i = 0; i < t.length; i++) {
            tCharCount[this.getCharIndex(t[i])]++;
            sCharCount[this.getCharIndex(s[i])]++;
        }

        // check if window is valid
        if(this.isValidWindow(tCharCount, sCharCount)) {
            return s.slice(minIndex, minIndex + t.length);
        }

        // iterate and check
        let left = 0;
        // use while?
        for(let right = t.length; right < s.length; right++) {

            sCharCount[this.getCharIndex(s[right])]++;

            // if window is invalid, expand right
            if(!this.isValidWindow(tCharCount, sCharCount)) {
            
                continue;

            } else {
                // otherwise, re-calc minLength, re-assign minIndex to left, remove at left, shift left

                while(this.isValidWindow(tCharCount, sCharCount)) {

                    minLength = Math.min(minLength, right - left + 1);
                    minIndex = left;

                    sCharCount[this.getCharIndex(s[left])]--;

                    left++;

                }

            }

        }

        return minLength === Infinity ? "" : s.slice(minIndex, minIndex + minLength);

    }

    getCharIndex(char) {
        if(char >= 'a' && char <= 'z') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        } else if(char >= 'A' && char <= 'Z') {
            return char.charCodeAt(0) - 'A'.charCodeAt(0) + 26;
        }
    }

    isValidWindow(arr1, arr2) {
        for(let i = 0; i < 52; i++) {
            if(arr1[i] > arr2[i]) {
                return false;
            }
        }
        return true;
    }
}
