class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;

    const charCount = new Map();

    for (let i = 0; i < s.length; i += 1) {
        charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
    }

    for (const char of charCount.keys()) {

        for (let i = 0; i < s.length; i += 1) {
            let count = 0;
            for (let j = i; j < s.length; j += 1) {
                if (s[j] !== char) {
                    count += 1;
                    if (count > k) {
                        break;
                    }
                }
                longest = Math.max(longest, j - i + 1);
            }

        }
    }

    return longest;

    }
}
