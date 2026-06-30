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

        const tCount = new Array(52).fill(0);
        const sCount = new Array(52).fill(0);

        for(let i = 0; i < t.length; i++) {
            tCount[this.getIndex(t[i])]++;
            sCount[this.getIndex(s[i])]++;
        }

        let minStart = 0;
        let minLength = Infinity;

        let left = 0;
        let right = t.length - 1;

        while(right < s.length) {

            // check if window is valid
            if(this.isValidWindow(tCount, sCount)) {
                // if yes, record minWindow and shrink left
                minLength = Math.min(minLength, right - left + 1);
                minStart = left;

                sCount[this.getIndex(s[left])]--;
                left++;

            } else {
                // If no, expand right
                right++;
                if(right < s.length) {
                    sCount[this.getIndex(s[right])]++;
                }
            }

        }

        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);

    }

    getIndex(char) {
        if(char >= 'a' && char <= 'z') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        } else {
            return char.charCodeAt(0) - 'A'.charCodeAt(0) + 26;
        }
    }

    isValidWindow(tCount, sCount) {
        for(let i = 0; i < 52; i++) {
            if(sCount[i] < tCount[i]) {
                return false;
            }
        }
        return true;
    }
}
