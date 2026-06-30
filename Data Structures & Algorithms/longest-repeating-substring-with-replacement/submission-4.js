class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let result = 0;

        const sCount = new Array(26).fill(0);

        let left = 0;
        let right = 0;

        while(right < s.length) {

            // add at right
            sCount[this.indexOfChar(s[right])]++;

            // while invalid
            // while(this.isValidWindow(sCount, left, right, k)) {
            while((right - left + 1) - Math.max(...sCount) > k) {

                sCount[this.indexOfChar(s[left])]--;
                left++;

            }

            result = Math.max(result, right - left + 1);
            right++;

        }

        return result;

    }

    indexOfChar(char) {
        return char.charCodeAt(0) - 'A'.charCodeAt(0);
    }

    isValidWindow(charCount, left, right, k) {
        return (right - left + 1) - Math.max(...charCount) <= k;
    }
}
